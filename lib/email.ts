import { Resend } from "resend";
import { CONTACT, type Product } from "@/lib/constants";
import { purchaseWhatsappUrl, sampleWhatsappUrl } from "@/lib/whatsapp";

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
    "Next step: message us on WhatsApp and we'll send your secure payment link (card or USDT). Your Excel file is delivered within 10 minutes of payment confirmation.",
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

  const html = emailShell(`
          <p style="margin:0 0 16px;font-size:16px">${escapeHtml(greeting)}</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5">Thanks for your request for the <strong>${escapeHtml(product.name)}</strong> (${escapeHtml(price)}, one-time).</p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.5">Next step: message us on WhatsApp and we'll send your secure payment link (card or USDT). Your Excel file is delivered within <strong>10 minutes</strong> of payment confirmation.</p>
          ${emailButton(whatsappUrl, "Get my payment link on WhatsApp")}
          <p style="margin:0 0 8px;font-size:14px;color:#475467">Every purchase is covered by our 7-day quality guarantee.</p>
          <p style="margin:0;font-size:14px;color:#475467">Questions? Just reply to this email.</p>`);

  return { subject: `Your ${product.shortName} request: next step`, text, html };
}

/**
 * Confirmation to someone who asked for a free sample: what they asked for,
 * when to expect it and a WhatsApp button to get it faster. Like the buyer
 * confirmation it carries no visitor-supplied text at all.
 */
export async function sendSampleConfirmation({
  to,
  product,
}: {
  to: string;
  product: Product;
}): Promise<boolean> {
  return send({ to, replyTo: CONTACT.email, ...sampleConfirmationEmail(product) });
}

/** Subject, text and HTML of the sample confirmation (pure, for testing). */
export function sampleConfirmationEmail(product: Product): {
  subject: string;
  text: string;
  html: string;
} {
  const whatsappUrl = sampleWhatsappUrl(product);
  const productUrl = `https://realestate-info.world/products/${product.slug}`;
  const price = `$${product.price.toLocaleString()} USD`;

  const text = [
    "Hi,",
    "",
    `We received your request for a free sample of the ${product.name}.`,
    "",
    "We'll send the sample to your WhatsApp number, usually within a few hours. It contains real records from the current file, in the same Excel columns as the full dataset.",
    "",
    `Want it right now? Message us on WhatsApp: ${whatsappUrl}`,
    "",
    `Full dataset: ${productUrl} (${price} one-time, pay by card or USDT, 7-day quality guarantee).`,
    "",
    "Questions? Just reply to this email.",
    "",
    "Real Estate Info World",
    "https://realestate-info.world",
  ].join("\n");

  const html = emailShell(`
          <p style="margin:0 0 16px;font-size:16px">Hi,</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5">We received your request for a <strong>free sample</strong> of the <strong>${escapeHtml(product.name)}</strong>.</p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.5">We'll send the sample to your WhatsApp number, usually within a few hours. It contains real records from the current file, in the same Excel columns as the full dataset.</p>
          ${emailButton(whatsappUrl, "Message us on WhatsApp")}
          <p style="margin:0 0 8px;font-size:14px;color:#475467">Full dataset: <a href="${productUrl}" style="color:#047857">${escapeHtml(product.name)}</a>, ${escapeHtml(price)} one-time. Pay by card or USDT. 7-day quality guarantee.</p>
          <p style="margin:0;font-size:14px;color:#475467">Questions? Just reply to this email.</p>`);

  return { subject: `Your free ${product.shortName} sample is on its way`, text, html };
}

/** Branded wrapper shared by every customer-facing email. */
function emailShell(inner: string): string {
  return `<!doctype html>
<html><body style="margin:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;color:#0b1424">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
        <tr><td style="background:#0a1628;padding:20px 28px;color:#ffffff;font-size:14px;letter-spacing:3px;font-weight:bold">REAL ESTATE INFO WORLD</td></tr>
        <tr><td style="padding:28px">${inner}
        </td></tr>
        <tr><td style="padding:16px 28px;border-top:1px solid #e4e9f0;font-size:12px;color:#667085">Real Estate Info World · <a href="https://realestate-info.world" style="color:#047857">realestate-info.world</a></td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function emailButton(href: string, label: string): string {
  return `<p style="margin:0 0 24px"><a href="${href}" style="display:inline-block;background:#059669;color:#ffffff;text-decoration:none;font-weight:bold;font-size:16px;padding:14px 28px;border-radius:999px">${label}</a></p>`;
}

/** How long after a sample request the one follow-up email goes out. */
export const SAMPLE_FOLLOW_UP_HOURS = 48;

/**
 * One follow-up, scheduled with Resend at request time so no database or cron
 * is needed: checks the sample arrived and links to the full dataset. Like
 * the other customer emails it carries no visitor-supplied text.
 */
export async function scheduleSampleFollowUp({
  to,
  product,
}: {
  to: string;
  product: Product;
}): Promise<boolean> {
  const scheduledAt = new Date(Date.now() + SAMPLE_FOLLOW_UP_HOURS * 60 * 60 * 1000).toISOString();
  return send({ to, replyTo: CONTACT.email, scheduledAt, ...sampleFollowUpEmail(product) });
}

/** Subject, text and HTML of the sample follow-up (pure, for testing). */
export function sampleFollowUpEmail(product: Product): {
  subject: string;
  text: string;
  html: string;
} {
  // Tagged so GA shows which orders the follow-up brought back.
  const productUrl = `https://realestate-info.world/products/${product.slug}?utm_source=email&utm_medium=followup&utm_campaign=free_sample#buy`;
  const whatsappUrl = sampleWhatsappUrl(product);
  const price = `$${product.price.toLocaleString()} USD`;
  const size = `${product.stats[0].value} ${product.stats[0].label.toLowerCase()}`;

  const text = [
    "Hi,",
    "",
    `A couple of days ago you asked for a free sample of the ${product.name}.`,
    "",
    `If it hasn't reached you on WhatsApp, message us there and we'll send it again: ${whatsappUrl}`,
    "",
    `If the data looks right, the full file has ${size} for ${price} one-time. Pay by card or USDT; it's delivered within 10 minutes of payment confirmation and covered by a 7-day quality guarantee.`,
    "",
    `Get the full ${product.shortName}: ${productUrl}`,
    "",
    "This is the only follow-up we'll send about this request. If you've already ordered, please ignore it.",
    "",
    "Real Estate Info World",
    "https://realestate-info.world",
  ].join("\n");

  const html = emailShell(`
          <p style="margin:0 0 16px;font-size:16px">Hi,</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5">A couple of days ago you asked for a free sample of the <strong>${escapeHtml(product.name)}</strong>.</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5">If it hasn't reached you on WhatsApp, <a href="${whatsappUrl}" style="color:#047857">message us there</a> and we'll send it again.</p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.5">If the data looks right, the full file has <strong>${escapeHtml(size)}</strong> for <strong>${escapeHtml(price)}</strong> one-time. Pay by card or USDT; it's delivered within 10 minutes of payment confirmation and covered by a 7-day quality guarantee.</p>
          ${emailButton(productUrl, `Get the full ${escapeHtml(product.shortName)}`)}
          <p style="margin:0;font-size:14px;color:#475467">This is the only follow-up we'll send about this request. If you've already ordered, please ignore it.</p>`);

  return { subject: `Did your ${product.shortName} sample arrive?`, text, html };
}

async function send({
  to,
  subject,
  text,
  html,
  replyTo,
  scheduledAt,
}: Notification & { to: string; html?: string; scheduledAt?: string }): Promise<boolean> {
  if (!resend) {
    console.error(`[EMAIL] RESEND_API_KEY is not set; email to ${to} not sent:\n` + text);
    return false;
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject,
    text,
    html,
    replyTo,
    // ISO time for a delayed send; omitted for an immediate one.
    ...(scheduledAt && { scheduledAt }),
  });

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
