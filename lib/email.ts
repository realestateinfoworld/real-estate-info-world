import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// The sender must be on a domain verified in Resend.
const FROM =
  process.env.RESEND_FROM_EMAIL ??
  "Real Estate Info World <notifications@realestate-info.world>";

interface Notification {
  subject: string;
  text: string;
  replyTo?: string;
}

/**
 * Sends a plain-text notification to the team inbox.
 * Returns false (and logs why) when the email could not be sent.
 */
export async function sendNotification({
  subject,
  text,
  replyTo,
}: Notification): Promise<boolean> {
  if (!resend) {
    console.error("[EMAIL] RESEND_API_KEY is not set; notification not sent:\n" + text);
    return false;
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: process.env.NOTIFICATION_EMAIL ?? CONTACT.email,
    subject,
    text,
    replyTo,
  });

  if (error) {
    console.error("[EMAIL] Resend failed:", error, "\n" + text);
    return false;
  }

  return true;
}

/** Current date and time in Dubai, for notification bodies. */
export function dubaiTimestamp(): string {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
