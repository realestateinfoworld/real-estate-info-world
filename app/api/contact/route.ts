import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { dubaiTimestamp, sendNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const parsed = contactSchema.safeParse(await request.json());

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
