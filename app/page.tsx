import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Users, Target, ShieldCheck, MapPin } from "lucide-react";
import { TESTIMONIALS, AREAS_COVERED } from "@/lib/constants";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* HERO — Upgraded with professional full-width background image */}
      <Hero />

      {/* PRODUCT OVERVIEW — SaaS Cards */}
      <section className="container pb-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-sm font-medium text-[#947f57]">DUBAI REAL ESTATE DATA PRODUCTS</div>
            <h2 className="text-3xl font-semibold tracking-tight">Dubai Property Owner Database &amp; Buyer Leads</h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center text-sm text-[#947f57] hover:underline">
            See full comparison <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ProductCard slug="owner-database" />
          <ProductCard slug="buyer-leads" />
        </div>
      </section>

      {/* WHY US — Simple & Professional */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-6">
          <div className="max-w-4xl mb-6">
            <h2 className="text-3xl font-semibold tracking-tight">Built for Dubai real estate brokers who close deals</h2>
            <p className="mt-2 text-[#5a5a5a]">We focus on one thing: delivering the highest-quality, most usable Dubai property owner data and buyer leads available for brokers, consultants, and agencies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">Verified at Source</div>
                <p className="text-sm text-[#5a5a5a]">Data cross-checked against Dubai Land Department records and phone validation systems. Accurate Dubai owner leads.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">CRM-Native Structure</div>
                <p className="text-sm text-[#5a5a5a]">Consistent columns designed for direct import into your Dubai real estate CRM. No cleanup required.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">Actionable Immediately</div>
                <p className="text-sm text-[#5a5a5a]">Direct mobile numbers ready for WhatsApp outreach and calling to Dubai owners and buyers. No extra tools needed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS — Minimal */}
      <section className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {[
            { number: "1,000,000+", label: "Dubai Property Owners" },
            { number: "10,000+", label: "Dubai Buyer Leads" },
            { number: "99%", label: "Verified Accuracy" },
            { number: "10 min", label: "Instant Delivery" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-semibold tracking-tighter text-[#3d3d3d]">{stat.number}</div>
              <div className="text-[#6b6b6b] mt-1 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS COVERED — New section for Dubai targeting & SEO (prime communities) */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-[#947f57]" />
            <div>
              <div className="text-sm font-medium text-[#947f57]">COVERAGE</div>
              <h2 className="text-2xl font-semibold tracking-tight">Key Dubai Areas &amp; Communities Covered</h2>
            </div>
          </div>
          <p className="text-[#5a5a5a] mb-5 max-w-3xl">
            Our Dubai Property Owner Database and Dubai Buyer Leads include verified records from Dubai’s most active and high-value real estate areas. Target owners and buyers precisely where deals happen.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {AREAS_COVERED.map((area, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 rounded-md border border-[#c8c8c8] bg-white px-4 py-3 text-sm font-medium text-[#3d3d3d] shadow-sm"
              >
                <span className="text-[#947f57]">•</span> {area}
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[#6b6b6b]">
            200+ premium Dubai communities total. Data optimized for Dubai real estate leads and property marketing campaigns.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — Professional */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-6">
          <div className="mb-4">
            <div className="text-sm font-medium text-[#947f57]">FROM DUBAI REAL ESTATE PROFESSIONALS</div>
            <h3 className="text-2xl font-semibold tracking-tight">Real feedback from Dubai brokers and agencies</h3>
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
        <h2 className="text-3xl font-semibold tracking-tight">Ready to grow your Dubai real estate business?</h2>
        <p className="mt-2 text-[#5a5a5a]">Get direct access to Dubai property owners and high-intent buyers. Choose your dataset and receive data in 10 minutes (instant processing available).</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/products/owner-database">
            <Button size="lg">Buy Dubai Owner Database — $300</Button>
          </Link>
          <Link href="/products">
            <Button size="lg" variant="outline">Compare Dubai Data Products</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
