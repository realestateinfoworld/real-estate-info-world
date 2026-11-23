import type { NextRequest } from "next/server";

/**
 * Fixed-window-ish rate limiter kept in memory. On Vercel each warm function
 * instance has its own memory, so this is best effort: it stops a single bot
 * hammering an endpoint, not a distributed attack (use the Vercel Firewall
 * for that).
 */
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on long-lived instances.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }

  return recent.length > limit;
}

/** Best guess at the caller's IP behind Vercel's proxy. */
export function clientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
