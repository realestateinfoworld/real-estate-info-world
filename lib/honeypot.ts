/**
 * Name of the hidden form field bots fill in and people never see
 * (components/HoneypotField.tsx). Shared by the forms and the API routes.
 */
export const HONEYPOT_FIELD = "website";

/** True when the honeypot field came back with any content. */
export function isHoneypotFilled(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const value = (body as Record<string, unknown>)[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim() !== "";
}
