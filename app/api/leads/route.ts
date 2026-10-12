import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { dubaiTimestamp, sendNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

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

    // The buyer is handed to WhatsApp either way: a failed notification is
    // logged by sendNotification, but must never block a sale.
    await sendNotification({
      subject: "New Lead - Real Estate Info World",
      replyTo: email,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Product: ${productName}`,
        `Date: ${dubaiTimestamp()}`,
      ].join("\n"),
    });

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
