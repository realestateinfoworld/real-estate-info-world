import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Users, Target, ShieldCheck, MapPin } from "lucide-react";
import { TESTIMONIALS, HOMEPAGE_STATS, PRODUCTS, getProductsByMarket } from "@/lib/constants";
import { Hero } from "@/components/Hero";

export default function Home() {
  const marketGroups = getProductsByMarket();
  const marketNames = marketGroups.map((g) => g.market.name);
  const marketList =
    marketNames.length > 1
      ? `${marketNames.slice(0, -1).join(", ")} and ${marketNames[marketNames.length - 1]}`
      : marketNames[0];

  return (
    <>
      {/* HERO — Upgraded with professional full-width background image */}
      <Hero />

      {/* PRODUCT OVERVIEW — every dataset, each card names its market */}
      <section className="container pt-8 pb-6 md:pt-0">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-sm font-medium text-[#947f57]">REAL ESTATE DATA PRODUCTS</div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Property Owner Databases &amp; Buyer Leads
            </h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center text-sm text-[#947f57] hover:underline">
            See full comparison <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* WHY US — Simple & Professional */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-6">
          <div className="max-w-4xl mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">
              Built for real estate brokers who close deals
            </h2>
            <p className="mt-2 text-[#5a5a5a]">
              We focus on one thing: delivering the highest-quality, most usable property owner data and buyer
              leads available for brokers, consultants, and agencies in {marketList}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">Verified at Source</div>
                <p className="text-sm text-[#5a5a5a]">
                  Owner records are cross-checked against official property records; buyer leads are validated
                  against the campaign they were captured from. Phone and email verified in every market we cover.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">CRM-Native Structure</div>
                <p className="text-sm text-[#5a5a5a]">
                  Consistent columns designed for direct import into your real estate CRM. No cleanup required.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">Actionable Immediately</div>
                <p className="text-sm text-[#5a5a5a]">
                  Direct mobile numbers ready for WhatsApp outreach and calling to owners and buyers. No extra tools
                  needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS — Minimal */}
      <section className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {HOMEPAGE_STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-semibold tracking-tighter text-[#3d3d3d]">{stat.number}</div>
              <div className="text-[#6b6b6b] mt-1 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS COVERED — per market, for targeting & SEO */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-[#947f57]" />
            <div>
              <div className="text-sm font-medium text-[#947f57]">COVERAGE</div>
              <h2 className="text-2xl font-semibold tracking-tight">Key Areas &amp; Communities Covered</h2>
            </div>
          </div>
          <p className="text-[#5a5a5a] mb-5 max-w-3xl">
            Our owner databases and buyer leads include verified records from the most active and high-value real
            estate areas in {marketList}. Target owners and buyers precisely where deals happen.
          </p>

          <div className="space-y-6">
            {marketGroups.map(({ market }) => (
              <div key={market.key}>
                {marketGroups.length > 1 && (
                  <div className="text-sm font-medium text-[#3d3d3d] mb-3">{market.label}</div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {market.areas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-md border border-[#c8c8c8] bg-white px-4 py-3 text-sm font-medium text-[#3d3d3d] shadow-sm"
                    >
                      <span className="text-[#947f57]">•</span> {area}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#6b6b6b]">
                  {market.areasMore.replace(/^\+\s*/, "")} in {market.name}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Professional */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-6">
          <div className="mb-4">
            <div className="text-sm font-medium text-[#947f57]">FROM REAL ESTATE PROFESSIONALS</div>
            <h3 className="text-2xl font-semibold tracking-tight">Real feedback from brokers and agencies</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <p className="text-[#5a5a5a] leading-relaxed">“{t.quote}”</p>
                  <div className="mt-6 text-sm">
                    <div className="font-medium text-[#3d3d3d]">{t.name}</div>
                    <div className="text-[#6b6b6b]">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to grow your real estate business?</h2>
        <p className="mt-2 text-[#5a5a5a]">
          Get direct access to property owners and high-intent buyers. Choose your dataset and receive data in 10
          minutes (instant processing available).
        </p>
        {/* One CTA per dataset, matching the hero */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {PRODUCTS.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <Button size="lg" className="px-5">
                {product.shortName} — ${product.price.toLocaleString()}
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
