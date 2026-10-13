import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { dubaiTimestamp, sendLeadConfirmation, sendNotification } from "@/lib/email";
import { PRODUCTS } from "@/lib/constants";
import { isHoneypotFilled } from "@/lib/honeypot";
import { clientIp, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = clientIp(request);
    if (isRateLimited(`leads:${ip}`, 5, 10 * 60 * 1000)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a few minutes or contact us on WhatsApp.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Bot filled the hidden field: answer like a success so it doesn't retry,
    // but send nothing.
    if (isHoneypotFilled(body)) {
      console.warn("[LEADS API] Honeypot triggered, ignoring submission from", ip);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate payload (only fullName, email, product)
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: errors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const fullName = data.fullName.trim();
    const email = data.email.trim().toLowerCase();
    const productName = data.product;

    // The schema only accepts real product names, so this always resolves.
    const product = PRODUCTS.find((p) => p.name === productName)!;

    // The buyer is handed to WhatsApp either way: a failed email is logged by
    // the sender, but must never block a sale.
    await Promise.all([
      sendNotification({
        subject: "New Lead - Real Estate Info World",
        replyTo: email,
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Product: ${productName}`,
          `Date: ${dubaiTimestamp()}`,
        ].join("\n"),
      }),
      sendLeadConfirmation({ to: email, fullName, product }),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[LEADS API] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
