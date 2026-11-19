import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PRODUCTS } from "@/lib/constants";
import { PROOF_MAX_BYTES, PROOF_TYPES, getWallet } from "@/lib/crypto";
import { dubaiTimestamp, sendCryptoProofConfirmation, sendNotification } from "@/lib/email";
import { HONEYPOT_FIELD } from "@/lib/honeypot";
import { clientIp, isRateLimited } from "@/lib/rate-limit";

const fieldsSchema = z.object({
  product: z.string().refine((slug) => PRODUCTS.some((p) => p.slug === slug), "Unknown dataset"),
  wallet: z.string().refine((id) => Boolean(getWallet(id)), "Unknown wallet"),
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+?[\d\s().-]{7,20}$/, "Please enter a valid WhatsApp number")
    .or(z.literal("")),
  // Transaction hashes are letters and digits (0x… for EVM chains).
  txHash: z
    .string()
    .trim()
    .regex(/^[A-Za-z0-9]{10,100}$/, "That transaction ID doesn't look right")
    .or(z.literal("")),
});

/** The file really is the type it claims, judged by its first bytes. */
function looksLike(type: string, bytes: Uint8Array): boolean {
  const ascii = (from: number, to: number) => String.fromCharCode(...bytes.slice(from, to));
  switch (type) {
    case "image/png":
      return bytes[0] === 0x89 && ascii(1, 4) === "PNG";
    case "image/jpeg":
      return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    case "image/webp":
      return ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP";
    case "image/heic":
    case "image/heif":
      return ascii(4, 8) === "ftyp";
    case "application/pdf":
      return ascii(0, 5) === "%PDF-";
    default:
      return false;
  }
}

const EXTENSIONS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/heic": "heic",
  "image/heif": "heif",
  "application/pdf": "pdf",
};

const fail = (error: string, status = 400) => NextResponse.json({ success: false, error }, { status });

/**
 * A buyer paid in crypto and sent a screenshot: email it to the team, who
 * check the blockchain and send the file, and confirm receipt to the buyer.
 */
export async function POST(request: NextRequest) {
  try {
    const ip = clientIp(request);
    if (isRateLimited(`crypto:${ip}`, 5, 10 * 60 * 1000)) {
      return fail("Too many requests. Please wait a few minutes or send the screenshot on WhatsApp.", 429);
    }

    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return fail("Please attach the screenshot and try again.");
    }

    // Bot filled the hidden field: answer like a success, send nothing.
    if (String(form.get(HONEYPOT_FIELD) ?? "").trim()) {
      console.warn("[CRYPTO API] Honeypot triggered, ignoring submission from", ip);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const parsed = fieldsSchema.safeParse({
      product: form.get("product") ?? "",
      wallet: form.get("wallet") ?? "",
      fullName: form.get("fullName") ?? "",
      email: form.get("email") ?? "",
      whatsapp: form.get("whatsapp") ?? "",
      txHash: form.get("txHash") ?? "",
    });
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      return fail(first || "Please check your details.");
    }

    const proof = form.get("proof");
    if (!(proof instanceof File) || proof.size === 0) return fail("Please attach the screenshot of your payment.");
    if (proof.size > PROOF_MAX_BYTES) return fail("That file is over 4 MB. Please upload a smaller screenshot.");
    const bytes = new Uint8Array(await proof.arrayBuffer());
    if (!PROOF_TYPES.includes(proof.type) || !looksLike(proof.type, bytes)) {
      return fail("Please upload a screenshot (PNG, JPG, WEBP, HEIC) or a PDF.");
    }

    const data = parsed.data;
    const product = PRODUCTS.find((p) => p.slug === data.product)!;
    const wallet = getWallet(data.wallet)!;
    const email = data.email.toLowerCase();

    const notified = await sendNotification({
      subject: `CRYPTO PAYMENT - ${product.shortName} - ${wallet.coin} ${wallet.network}`,
      replyTo: email,
      text: [
        "A buyer says they paid in crypto. Check the payment, then send the file to their email.",
        "",
        `Product: ${product.name} ($${product.price.toLocaleString("en-US")})`,
        `Paid with: ${wallet.coin} on ${wallet.network}`,
        `To address: ${wallet.address}`,
        data.txHash
          ? `Transaction: ${wallet.explorer.tx(data.txHash)}`
          : `Check incoming payments: ${wallet.explorer.address(wallet.address)}`,
        "",
        `Name: ${data.fullName}`,
        `Email: ${email}`,
        `WhatsApp: ${data.whatsapp || "-"}`,
        `Date: ${dubaiTimestamp()}`,
        "",
        "The payment screenshot is attached.",
      ].join("\n"),
      attachments: [{ filename: `payment-proof.${EXTENSIONS[proof.type]}`, content: Buffer.from(bytes) }],
    });

    // Nobody can deliver the file if the team never hears about the payment.
    if (!notified) return fail("We couldn't send your proof. Please send the screenshot to us on WhatsApp.", 502);

    await sendCryptoProofConfirmation({ to: email, product });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[CRYPTO API] Unexpected error:", err);
    return fail("An unexpected error occurred. Please try again.", 500);
  }
}
