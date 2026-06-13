import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Users, Target, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* HERO — Clean SaaS Style */}
      <section className="container pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="max-w-4xl">
          <Badge variant="primary" className="mb-4 text-sm px-3 py-1">May 2026 Data Available</Badge>
          
          <h1 className="text-5xl md:text-[56px] font-semibold tracking-[-2.8px] leading-[1.05] text-balance">
            Professional Dubai real estate data for serious teams.
          </h1>
          <p className="mt-4 text-xl text-[#5a5a5a]">
            Verified owner databases and high-intent buyer leads. Clean, structured, and ready for your CRM.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/products/owner-database">
              <Button size="lg">Get Owner Database — $250</Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline">View All Products</Button>
            </Link>
          </div>

          <div className="mt-6 text-sm text-[#6b6b6b]">
            Trusted by 240+ brokerages and agencies • 1,000,000+ owner records • 10,000+ buyer leads • 10-minute instant delivery on all products • PayPal secure
          </div>

          {/* Fast Delivery Trust Badge - Clean SaaS style */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f2f2f2] px-4 py-1.5 text-xs font-medium text-[#5a5a5a]">
            ⚡ Fastest Delivery in the Industry (10-Minute Instant Access Available)
          </div>

          {/* Record Count Trust Badge - Prominent in hero */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1.5 text-xs font-medium text-[#3d3d3d] shadow-sm">
            1,000,000+ Verified Property Records
          </div>

          {/* Buyer Leads Record Count Trust Badge */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1.5 text-xs font-medium text-[#3d3d3d] shadow-sm">
            10,000+ Verified Buyer Leads
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW — SaaS Cards */}
      <section className="container pb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-sm font-medium text-[#947f57]">PRODUCTS</div>
            <h2 className="text-3xl font-semibold tracking-tight">Choose the right dataset</h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center text-sm text-[#947f57] hover:underline">
            See full comparison <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProductCard slug="owner-database" />
          <ProductCard slug="buyer-leads" />
        </div>
      </section>

      {/* WHY US — Simple & Professional */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-16">
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">Built for professionals who close deals</h2>
            <p className="mt-2 text-[#5a5a5a]">We focus on one thing: delivering the highest-quality, most usable Dubai real estate data available.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">Verified at Source</div>
                <p className="text-sm text-[#5a5a5a]">Data is cross-checked against Dubai Land Department records and phone validation systems.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">CRM-Native Structure</div>
                <p className="text-sm text-[#5a5a5a]">Consistent columns designed for direct import. No cleanup required.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="h-9 w-9 rounded-lg bg-[#d4c3a3] text-[#947f57] flex items-center justify-center mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <div className="font-semibold mb-1.5">Actionable Immediately</div>
                <p className="text-sm text-[#5a5a5a]">Mobile numbers are ready for WhatsApp and calling. No additional tools needed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS — Minimal */}
      <section className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {[
            { number: "1,000,000+", label: "Property Owners" },
            { number: "10,000+", label: "Buyer Leads" },
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

      {/* TESTIMONIALS — Professional */}
      <section className="bg-[#f2f2f2] border-y border-[#c8c8c8]">
        <div className="container py-16">
          <div className="mb-8">
            <div className="text-sm font-medium text-[#947f57]">FROM THE INDUSTRY</div>
            <h3 className="text-2xl font-semibold tracking-tight">Real feedback from real users</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
      <section className="container py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to get started?</h2>
        <p className="mt-2 text-[#5a5a5a]">Choose a product and receive your data in 10 minutes (instant processing available).</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/products/owner-database">
            <Button size="lg">Buy Owner Database</Button>
          </Link>
          <Link href="/products">
            <Button size="lg" variant="outline">Compare Products</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
