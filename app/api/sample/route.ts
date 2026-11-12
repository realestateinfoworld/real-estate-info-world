import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/constants";
import {
  SAMPLE_FOLLOW_UP_HOURS,
  dubaiTimestamp,
  scheduleSampleFollowUp,
  sendNotification,
  sendSampleConfirmation,
} from "@/lib/email";
import { isHoneypotFilled } from "@/lib/honeypot";
import { clientIp, isRateLimited } from "@/lib/rate-limit";
import { sampleSchema } from "@/lib/sample-schema";
import { chatWithVisitorUrl } from "@/lib/whatsapp";

/** Free-sample request: notify the team, who send the sample by hand on WhatsApp. */
export async function POST(request: NextRequest) {
  try {
    const ip = clientIp(request);
    if (isRateLimited(`sample:${ip}`, 5, 10 * 60 * 1000)) {
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
      console.warn("[SAMPLE API] Honeypot triggered, ignoring submission from", ip);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const parsed = sampleSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const whatsapp = parsed.data.whatsapp;
    const email = parsed.data.email?.toLowerCase() || "";
    // The schema only accepts real product slugs, so this always resolves.
    const product = PRODUCTS.find((p) => p.slug === parsed.data.product)!;

    const [notified] = await Promise.all([
      sendNotification({
        subject: `New SAMPLE request - ${product.shortName} - WhatsApp ${whatsapp}`,
        replyTo: email || undefined,
        text: [
          "Someone asked for a free sample. Send it to them on WhatsApp, and ask whether they want the full file.",
          "",
          `Open the chat with them (message ready to send): ${chatWithVisitorUrl(whatsapp, product)}`,
          "",
          `Dataset: ${product.name}`,
          `WhatsApp: ${whatsapp}`,
          `Email: ${email || "-"}`,
          `Date: ${dubaiTimestamp()}`,
          ...(email
            ? [
                "",
                `They also get an automatic follow-up email in ${SAMPLE_FOLLOW_UP_HOURS} hours asking whether the sample arrived, so send it before then.`,
              ]
            : []),
        ].join("\n"),
      }),
      email ? sendSampleConfirmation({ to: email, product }) : Promise.resolve(true),
    ]);

    // Nobody can send the sample if the team never hears about the request,
    // so unlike a purchase lead this failure is reported to the visitor.
    if (!notified) {
      return NextResponse.json(
        {
          success: false,
          error: "We couldn't register your request. Please ask for your sample on WhatsApp.",
        },
        { status: 502 }
      );
    }

    // Only once the team knows about the request: the follow-up asks whether
    // the sample arrived. A failure to schedule it is logged, never shown.
    if (email) await scheduleSampleFollowUp({ to: email, product });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[SAMPLE API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
