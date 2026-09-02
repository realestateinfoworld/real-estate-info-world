import { Metadata } from "next";
import Link from "next/link";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SamplePreview } from "@/components/SamplePreview";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS, FAQS, AREAS_COVERED } from "@/lib/constants";
import { MetaPixelTracker } from "@/components/MetaPixelTracker";
import { ArrowLeft, Check } from "lucide-react";

const product = PRODUCTS.buyerLeads;

export const metadata: Metadata = {
  title: "Dubai Property Buyer Leads | 10,000+ High-Intent Buyers | August 2026",
  description: "Dubai Property Buyer Leads — 10,000+ verified high-intent buyers actively looking in Dubai. Budgets, timelines & contacts included. Perfect for Dubai real estate brokers, consultants & agencies targeting serious purchasers in Dubai Marina, Downtown, Palm Jumeirah and more. $1,200.",
  keywords: ["Dubai Buyer Leads", "Dubai Property Buyer Leads", "Dubai real estate leads", "high-intent Dubai buyers", "Dubai property marketing data"],
};

export default function BuyerLeadsPage() {
  return (
    <div className="container py-6">
      <Link href="/products" className="inline-flex items-center text-sm text-[#6b6b6b] mb-4 hover:text-[#3d3d3d]">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
      </Link>

      <div className="grid lg:grid-cols-12 gap-x-6 gap-y-6">
        {/* Meta Pixel Trackers */}
        <MetaPixelTracker 
          event="ViewContent" 
          parameters={{
            content_name: 'Dubai Property Buyer Leads',
            content_category: 'Databases',
            value: 1200,
            currency: 'USD'
          }} 
        />
        <MetaPixelTracker 
          event="InitiateCheckout" 
          parameters={{
            value: 1200,
            currency: 'USD',
            content_name: 'Dubai Property Buyer Leads'
          }} 
        />

        <div className="lg:col-span-8">
          <Badge variant="primary" className="mb-3">Premium Product • August 2026</Badge>
          
          <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-lg text-[#5a5a5a]">{product.shortDescription}</p>

          <p className="text-[#5a5a5a] mt-4">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-semibold text-sm tracking-wider text-[#6b6b6b] mb-3">WHAT'S INCLUDED</h3>
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
              {product.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-[#947f57] flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Areas Covered - Dubai focus for SEO & targeting (non-intrusive addition) */}
          <div className="mt-6">
            <h3 className="font-semibold text-sm tracking-wider text-[#6b6b6b] mb-3">KEY DUBAI AREAS COVERED</h3>
            <div className="flex flex-wrap gap-2">
              {AREAS_COVERED.map((area, i) => (
                <span key={i} className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#3d3d3d]">
                  {area}
                </span>
              ))}
              <span className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#6b6b6b]">+ 200+ more communities</span>
            </div>
            <p className="mt-2 text-xs text-[#6b6b6b]">Target motivated buyers actively searching in Dubai Marina, Business Bay, Palm Jumeirah, Downtown Dubai, Dubai Hills Estate and other prime locations.</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-semibold">Sample Data Preview</h3>
              <Badge variant="outline" className="text-xs">Actual format</Badge>
            </div>
            <SamplePreview type="buyer" />
          </div>
        </div>

        <div className="lg:col-span-4">
          <Card className="sticky top-36 z-40">
            <CardContent className="pt-6">
              <div className="text-4xl font-semibold tracking-tighter mb-1">${product.price}</div>
              <div className="text-sm text-[#947f57] font-medium mb-4">One-time • 10 min delivery</div>

              <LeadCaptureForm product={product} />

              <div className="mt-6 text-sm space-y-1 text-[#5a5a5a]">
                <div className="flex justify-between"><span>Leads</span><span className="font-medium">{product.stats.leads}</span></div>
                <div className="flex justify-between"><span>Accuracy</span><span className="font-medium">{product.stats.accuracy}</span></div>
                <div className="flex justify-between"><span>Avg. Budget</span><span className="font-medium">{product.stats.avgBudget}</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-medium">Excel (.xlsx)</span></div>
              </div>

              <div className="text-[10px] text-[#6b6b6b] mt-4 pt-3 border-t">
                7-day guarantee. PayPal secure.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-8 max-w-2xl">
        <h2 className="font-semibold text-2xl tracking-tight mb-6">Frequently Asked Questions</h2>
        <div className="divide-y border-y">
          {FAQS.map((faq, i) => (
            <div key={i} className="py-5">
              <div className="font-medium">{faq.question}</div>
              <div className="text-sm text-[#334155] mt-1.5 pr-4">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
