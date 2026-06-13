import type { Metadata } from "next";
import Link from "next/link";
import { OwnerButton } from "@/components/paypal/OwnerButton";
import { SamplePreview } from "@/components/SamplePreview";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS, FAQS } from "@/lib/constants";
import { MetaPixelTracker } from "@/components/MetaPixelTracker";
import { ArrowLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Dubai Property Owner Database",
  description: "Verified Dubai Property Owner Database — May 2026. 1,000,000+ owners with updated mobile numbers. 10-minute instant delivery available. CRM-ready Excel. $250.",
};

const product = PRODUCTS.ownerDatabase;

export default function OwnerDatabasePage() {
  return (
    <div className="container py-10">
      <Link href="/products" className="inline-flex items-center text-sm text-[#6b6b6b] mb-6 hover:text-[#3d3d3d]">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
      </Link>

      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        {/* Meta Pixel Trackers */}
        <MetaPixelTracker 
          event="ViewContent" 
          parameters={{
            content_name: 'Dubai Property Owner Database',
            content_category: 'Databases',
            value: 250,
            currency: 'USD'
          }} 
        />
        <MetaPixelTracker 
          event="InitiateCheckout" 
          parameters={{
            value: 250,
            currency: 'USD',
            content_name: 'Dubai Property Owner Database'
          }} 
          triggerOnMount={true}
        />

        {/* Main Content */}
        <div className="lg:col-span-8">
          <Badge variant="primary" className="mb-3">May 2026 Updated</Badge>
          
          <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-lg text-[#5a5a5a]">{product.shortDescription}</p>

          {/* Prominent Delivery Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1.5 text-sm font-medium shadow-sm">
            ⚡ 10 Minutes (Instant Processing Available)
          </div>

          {/* Prominent Record Count Badge */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#947f57] bg-[#d4c3a3] px-4 py-1.5 text-sm font-semibold text-[#3d3d3d]">
            1,000,000+ Verified Property Records
          </div>

          <div className="flex items-baseline gap-2 mt-6 mb-8">
            <span className="text-6xl font-semibold tabular-nums tracking-[-2px]">${product.price}</span>
            <span className="text-lg text-[#6b6b6b]">USD — One-time purchase</span>
          </div>

          <div className="prose text-[#5a5a5a]">
            <p>{product.description}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-sm tracking-wider text-[#6b6b6b] mb-3">WHAT'S INCLUDED</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-[#947f57] flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Sample Preview */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-semibold">Sample Data Preview</h3>
              <Badge variant="outline" className="text-xs">Actual format</Badge>
            </div>
            <SamplePreview type="owner" />
          </div>
        </div>

        {/* Purchase Sidebar */}
        <div className="lg:col-span-4">
          <Card className="sticky top-28 z-40">
            <CardContent className="pt-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e8e0d3] border border-[#c8b89e] px-3 py-1 text-xs font-semibold text-[#947f57]">
                  ⚡ 10 MINUTES • INSTANT PROCESSING AVAILABLE
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#947f57] bg-[#d4c3a3] px-3 py-1 text-xs font-semibold text-[#3d3d3d]">
                  1,000,000+ RECORDS
                </div>
              </div>
              <div className="text-4xl font-semibold tracking-tighter mb-2">${product.price}</div>
              <div className="text-sm text-[#947f57] font-medium mb-6">Delivered in 10 minutes (instant processing)</div>

              <OwnerButton />

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b bg-[#f2f2f2] -mx-2 px-2 rounded">
                  <span className="text-[#5a5a5a]">Records</span>
                  <span className="font-semibold text-[#947f57]">{product.stats.records}</span>
                </div>
                <div className="flex justify-between py-2 border-b bg-[#e8e0d3] -mx-2 px-2 rounded">
                  <span className="text-[#5a5a5a]">Accuracy</span>
                  <span className="font-semibold text-[#947f57]">{product.stats.accuracy}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-[#6b6b6b]">Communities</span>
                  <span className="font-medium">{product.stats.communities}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#6b6b6b]">Format</span>
                  <span className="font-medium">Excel (.xlsx)</span>
                </div>
              </div>

              <div className="text-xs text-[#6b6b6b] mt-6 leading-relaxed">
                10-minute instant delivery for Owner Database. 7-day refund for quality issues. Secure checkout powered by PayPal.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-2xl">
        <h2 className="font-semibold text-2xl tracking-tight mb-6">Frequently Asked Questions</h2>
        <div className="divide-y border-y">
          {FAQS.map((faq, i) => (
            <div key={i} className="py-5">
              <div className="font-medium">{faq.question}</div>
              <div className="text-sm text-[#5a5a5a] mt-1.5 pr-4">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
