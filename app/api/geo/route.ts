import { NextRequest, NextResponse } from "next/server";

// Reads the request's headers, so it is rendered for every request.
export const dynamic = "force-dynamic";

/**
 * The visitor's country, from the IP lookup Vercel adds to every request, so
 * the sample form can preselect their WhatsApp country code. Returns null
 * locally and wherever the header is missing.
 */
export function GET(request: NextRequest) {
  const header = request.headers.get("x-vercel-ip-country")?.toUpperCase() ?? "";
  const country = /^[A-Z]{2}$/.test(header) ? header : null;
  return NextResponse.json({ country }, { headers: { "Cache-Control": "private, no-store" } });
}
