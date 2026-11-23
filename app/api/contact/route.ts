import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { dubaiTimestamp, sendNotification } from "@/lib/email";
import { isHoneypotFilled } from "@/lib/honeypot";
import { clientIp, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = clientIp(request);
    if (isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
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
      console.warn("[CONTACT API] Honeypot triggered, ignoring submission from", ip);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const parsed = contactSchema.safeParse(body);

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

    const { name, email, company, message } = parsed.data;

    // Unlike a lead, the message itself is the point: report a failed send so
    // the visitor can reach us another way instead of thinking it arrived.
    const sent = await sendNotification({
      subject: `New Contact Message - ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Date: ${dubaiTimestamp()}`,
        "",
        message,
      ].join("\n"),
    });

    if (!sent) {
      return NextResponse.json(
        {
          success: false,
          error: "We couldn't send your message. Please contact us on WhatsApp or by email.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[CONTACT API] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
