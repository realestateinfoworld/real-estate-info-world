import { ImageResponse } from "next/og";
import { GUIDES, getGuide } from "@/lib/guides";

export const alt = "Real Estate Info World guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export default async function GuideOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug) ?? GUIDES[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 15% 0%, #12403a 0%, #0a1628 55%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#10b981" }} />
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#34d399" }}>REAL ESTATE INFO WORLD · GUIDE</div>
        </div>
        <div style={{ display: "flex", fontSize: 80, lineHeight: 1.05, fontWeight: 600, letterSpacing: -2 }}>
          {guide.title}
        </div>
        <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 28, fontSize: 24, color: "#c5cfdd" }}>
          {`${guide.readingMinutes} min read · 2026 edition`}
        </div>
      </div>
    ),
    size
  );
}
