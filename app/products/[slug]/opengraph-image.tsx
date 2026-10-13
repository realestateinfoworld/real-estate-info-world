import { ImageResponse } from "next/og";
import { PRODUCTS, getMarket, getProduct } from "@/lib/constants";

export const alt = "Real Estate Info World dataset";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

// Share card per dataset, so links to a product page show that product rather
// than the generic homepage card.
export default async function ProductOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug) ?? PRODUCTS[0];
  const market = getMarket(product);

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
          background: "radial-gradient(circle at 20% 0%, #f1e4c8 0%, #faf7f1 60%)",
          color: "#1d1a15",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#a3854f" }} />
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#87693a" }}>REAL ESTATE INFO WORLD</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#87693a" }}>
            {`${market.label.toUpperCase()} · ${product.version.toUpperCase()}`}
          </div>
          <div style={{ marginTop: 16, fontSize: 72, lineHeight: 1.05, fontWeight: 600, letterSpacing: -2 }}>
            {product.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#5a5345" }}>{product.shortDescription}</div>
        </div>

        <div style={{ display: "flex", gap: 56, borderTop: "1px solid #d5cab4", paddingTop: 28 }}>
          {product.stats.slice(0, 3).map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, fontWeight: 600 }}>{stat.value}</div>
              <div style={{ fontSize: 18, color: "#776f5f" }}>{stat.label}</div>
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 600, color: "#87693a" }}>{`$${product.price.toLocaleString()}`}</div>
            <div style={{ fontSize: 18, color: "#776f5f" }}>One-time · USD</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
