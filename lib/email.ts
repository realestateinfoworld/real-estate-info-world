import { Resend } from "resend";
import { CONTACT, type Product } from "@/lib/constants";
import { purchaseWhatsappUrl } from "@/lib/whatsapp";

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
  return send({
    to: process.env.NOTIFICATION_EMAIL ?? CONTACT.email,
    subject,
    text,
    replyTo,
  });
}

/**
 * Confirmation to the buyer after the lead form: what they asked for and a
 * WhatsApp button to get the payment link, so a buyer whose WhatsApp hand-off
 * failed (or who closed it) still has a way back.
 *
 * Anyone can type any address into the form, so the email carries no free
 * text from the visitor beyond a sanitised first name: it can't be used to
 * send arbitrary content to third parties.
 */
export async function sendLeadConfirmation({
  to,
  fullName,
  product,
}: {
  to: string;
  fullName: string;
  product: Product;
}): Promise<boolean> {
  return send({ to, replyTo: CONTACT.email, ...leadConfirmationEmail(fullName, product) });
}

/** Subject, text and HTML of the buyer confirmation (pure, for testing). */
export function leadConfirmationEmail(
  fullName: string,
  product: Product
): { subject: string; text: string; html: string } {
  const firstName = safeFirstName(fullName);
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  const whatsappUrl = purchaseWhatsappUrl(product, firstName || undefined);
  const price = `$${product.price.toLocaleString()} USD`;

  const text = [
    greeting,
    "",
    `Thanks for your request for the ${product.name} (${price}, one-time).`,
    "",
    "Next step: message us on WhatsApp and we'll send your secure payment link. Your Excel file is delivered within 10 minutes of payment confirmation.",
    "",
    `Message us on WhatsApp: ${whatsappUrl}`,
    "",
    "Every purchase is covered by our 7-day quality guarantee.",
    "",
    "Questions? Just reply to this email.",
    "",
    "Real Estate Info World",
    "https://realestate-info.world",
  ].join("\n");

  const html = `<!doctype html>
<html><body style="margin:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;color:#0b1424">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
        <tr><td style="background:#0a1628;padding:20px 28px;color:#ffffff;font-size:14px;letter-spacing:3px;font-weight:bold">REAL ESTATE INFO WORLD</td></tr>
        <tr><td style="padding:28px">
          <p style="margin:0 0 16px;font-size:16px">${escapeHtml(greeting)}</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5">Thanks for your request for the <strong>${escapeHtml(product.name)}</strong> (${escapeHtml(price)}, one-time).</p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.5">Next step: message us on WhatsApp and we'll send your secure payment link. Your Excel file is delivered within <strong>10 minutes</strong> of payment confirmation.</p>
          <p style="margin:0 0 24px"><a href="${whatsappUrl}" style="display:inline-block;background:#059669;color:#ffffff;text-decoration:none;font-weight:bold;font-size:16px;padding:14px 28px;border-radius:999px">Get my payment link on WhatsApp</a></p>
          <p style="margin:0 0 8px;font-size:14px;color:#475467">Every purchase is covered by our 7-day quality guarantee.</p>
          <p style="margin:0;font-size:14px;color:#475467">Questions? Just reply to this email.</p>
        </td></tr>
        <tr><td style="padding:16px 28px;border-top:1px solid #e4e9f0;font-size:12px;color:#667085">Real Estate Info World · <a href="https://realestate-info.world" style="color:#047857">realestate-info.world</a></td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  return { subject: `Your ${product.shortName} request: next step`, text, html };
}

async function send({
  to,
  subject,
  text,
  html,
  replyTo,
}: Notification & { to: string; html?: string }): Promise<boolean> {
  if (!resend) {
    console.error(`[EMAIL] RESEND_API_KEY is not set; email to ${to} not sent:\n` + text);
    return false;
  }

  const { error } = await resend.emails.send({ from: FROM, to, subject, text, html, replyTo });

  if (error) {
    console.error(`[EMAIL] Resend failed sending to ${to}:`, error, "\n" + text);
    return false;
  }

  return true;
}

/** First word of the name, letters only, so no links or text can be injected. */
function safeFirstName(fullName: string): string {
  const first = fullName.trim().split(/\s+/)[0] ?? "";
  return first.replace(/[^\p{L}'-]/gu, "").slice(0, 30);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
