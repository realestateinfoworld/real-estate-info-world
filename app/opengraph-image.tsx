import { ImageResponse } from "next/og";
import { HOMEPAGE_STATS, formatMarketList } from "@/lib/constants";

export const alt = "Real Estate Info World — verified property owner databases and buyer leads";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "radial-gradient(circle at 20% 0%, #2a2117 0%, #0a0907 60%)",
          color: "#f4efe6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#c9ab72" }} />
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#c9ab72" }}>REAL ESTATE INFO WORLD</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600, letterSpacing: -2 }}>
            Verified owners & buyers,
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600, letterSpacing: -2, color: "#c9ab72" }}>
            ready to call.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#b5ab93" }}>
            {`Owner databases & buyer leads · ${formatMarketList()}`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56, borderTop: "1px solid #3d3427", paddingTop: 28 }}>
          {HOMEPAGE_STATS.map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, fontWeight: 600 }}>{stat.number}</div>
              <div style={{ fontSize: 18, color: "#8b8370" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
