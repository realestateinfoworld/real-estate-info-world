import type { NextConfig } from "next";

// Conservative security headers for every route. No Content-Security-Policy:
// GA, Meta Pixel and inline JSON-LD would each need allow-listing, and a
// wrong CSP silently breaks tracking. HSTS is already sent by Vercel.
const securityHeaders = [
  // Don't let other sites frame these pages (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Browsers must not guess content types.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin to other sites, the full URL within this one.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site uses none of these browser features.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
