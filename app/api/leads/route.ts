import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/lead-schema";

// NOTE: Resend import + init left in place for easy restore after testing.
// TEMPORARY TESTING MODE: Email delivery is completely skipped below.

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

    // Generate timestamp (Dubai time) for logging
    const leadDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // =====================================================
    // TEMPORARY TESTING MODE — Resend email sending REMOVED
    // 1. Skip email delivery entirely (no Resend call)
    // 2. Log lead details to server console
    // 3. Return success so the client redirects directly to PayPal
    // This is for testing only. UI and flow remain unchanged.
    // =====================================================

    console.log('\n[LEAD TEST MODE] Lead form submitted — email delivery skipped');
    console.log(`  Name:    ${fullName}`);
    console.log(`  Email:   ${email}`);
    console.log(`  Product: ${productName}`);
    console.log(`  Date:    ${leadDate}`);
    console.log('  (Would have sent email via Resend in production)\n');

    // Always succeed for this test phase → direct PayPal redirect on client
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (err: any) {
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
