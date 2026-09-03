import { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS, MARKETS, COMPARISON_ROWS, getProductsByMarket } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Real Estate Data Products | Owner Databases & Buyer Leads",
  description:
    "Compare every Real Estate Info World dataset — verified property owner databases and high-intent buyer leads. All CRM-ready Excel, delivered in 10 minutes. Built for real estate brokers, consultants and agencies.",
  keywords: [
    "Property Owner Database",
    "Buyer Leads",
    "Property Owner Leads",
    "real estate leads",
    "property marketing data",
  ],
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const marketGroups = getProductsByMarket();
  const marketNames = marketGroups.map((g) => g.market.name);
  const marketList =
    marketNames.length > 1
      ? `${marketNames.slice(0, -1).join(", ")} and ${marketNames[marketNames.length - 1]}`
      : marketNames[0];

  return (
    <div className="container py-6">
      <div className="max-w-4xl mb-6">
        <Badge variant="outline" className="mb-3">DATA PRODUCTS</Badge>
        <h1 className="text-4xl font-semibold tracking-tight">
          Property Owner Databases &amp; Buyer Leads
        </h1>
        <p className="mt-3 text-lg text-[#5a5a5a]">
          Focused datasets for real estate brokers, property consultants, and agencies across {marketList}.
          Every product is delivered as a clean, ready-to-use Excel file for immediate use in your CRM and marketing.
        </p>
      </div>

      {/* Every dataset in one grid — each card names its own market */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-[#c8c8c8]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-[#f2f2f2]">
                <th className="text-left p-4 font-medium whitespace-nowrap">Feature</th>
                {PRODUCTS.map((product) => (
                  <th key={product.slug} className="text-left p-4 font-medium">
                    <Link href={`/products/${product.slug}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.key} className="border-b">
                  <td className="p-4 text-[#5a5a5a] font-medium whitespace-nowrap">{row.label}</td>
                  {PRODUCTS.map((product) => (
                    <td key={product.slug} className="p-4">{product.comparison[row.key]}</td>
                  ))}
                </tr>
              ))}
              <tr className="last:border-0">
                <td className="p-4 text-[#5a5a5a] font-medium whitespace-nowrap">Price</td>
                {PRODUCTS.map((product) => (
                  <td key={product.slug} className="p-4 font-medium">${product.price}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-[#6b6b6b]">
        Need a custom dataset or larger volume?{" "}
        <Link href="/contact" className="underline text-[#947f57]">Contact us</Link>.
      </div>

      {/* Delivery format note, one per owner database */}
      {PRODUCTS.filter((p) => p.type === "owner").map((product) => {
        const market = MARKETS[product.market];
        return (
          <div key={product.slug} className="mt-8">
            <h2 className="font-semibold text-lg mb-2">{product.name}: Real Sample Files</h2>
            <p className="text-sm text-[#6b6b6b] mb-6">
              The database is delivered as individual .xlsx files — one for each premium {market.name} community
              including {market.areas.slice(0, 5).join(", ")}.
            </p>

            <p className="text-center text-xs text-[#6b6b6b] mt-2">
              {market.areasMore.replace(/^\+\s*/, "")} • {product.comparison.records} verified {market.name} owner
              records • Delivered as ready-to-use Excel files for property marketing
            </p>
          </div>
        );
      })}

      {/* Areas Covered, per market */}
      <div className="mt-8">
        <h2 className="font-semibold text-lg mb-3">Areas Covered in Our Databases</h2>
        <p className="text-sm text-[#5a5a5a] mb-5">
          Our owner databases and buyer leads cover each city&apos;s most important real estate markets for brokers and marketers.
        </p>

        <div className="space-y-5">
          {marketGroups.map(({ market }) => (
            <div key={market.key}>
              <div className="text-sm font-medium text-[#3d3d3d] mb-2">{market.label}</div>
              <div className="flex flex-wrap gap-2">
                {market.areas.map((area, i) => (
                  <span key={i} className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#3d3d3d]">
                    {area}
                  </span>
                ))}
                <span className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#6b6b6b]">
                  {market.areasMore}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
