import { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { AREAS_COVERED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dubai Real Estate Data Products | Owner Database & Buyer Leads",
  description: "Compare Dubai Property Owner Database (1M+ owners) and Dubai Property Buyer Leads (10k+ high-intent buyers). Both CRM-ready Excel, delivered in 10 minutes. Built for Dubai real estate brokers, consultants and agencies.",
  keywords: ["Dubai Property Owner Database", "Dubai Buyer Leads", "Dubai Property Owner Leads", "Dubai real estate leads", "Dubai property marketing data"],
};

export default function ProductsPage() {
  return (
    <div className="container py-6">
      <div className="max-w-4xl mb-6">
        <Badge variant="outline" className="mb-3">DUBAI DATA PRODUCTS</Badge>
        <h1 className="text-4xl font-semibold tracking-tight">Dubai Property Owner Database &amp; Buyer Leads</h1>
        <p className="mt-3 text-lg text-[#5a5a5a]">
          Two focused datasets for Dubai real estate brokers, property consultants, and agencies. Both delivered as clean, ready-to-use Excel files for immediate use in your CRM and marketing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <ProductCard slug="owner-database" />
        <ProductCard slug="buyer-leads" />
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-[#c8c8c8]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-[#f2f2f2]">
                <th className="text-left p-4 font-medium">Feature</th>
                <th className="text-left p-4 font-medium">Owner Database</th>
                <th className="text-left p-4 font-medium">Buyer Leads</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Best For", "Dubai owner outreach & off-market listings", "High-value Dubai buyer conversions"],
                ["Record Count", "1,000,000+", "10,000+"],
                ["Accuracy", "99%", "99%"],
                ["Communities", "200+", "—"],
                ["Price", "$300", "$1,200"],
                ["Data Type", "Verified Dubai Property Owners", "High-Intent Dubai Buyers"],
                ["Budget Info", "No Financial Profile Data Included", "Included"],
                ["Format", "Excel (.xlsx)", "Excel (.xlsx)"],
                ["Delivery", "10 Minutes (Instant)", "10 Minutes (Instant)"],
              ].map((row, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="p-4 text-[#5a5a5a] font-medium">{row[0]}</td>
                  <td className="p-4">{row[1]}</td>
                  <td className="p-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-[#6b6b6b]">
        Need a custom dataset or larger volume? <Link href="/contact" className="underline text-[#947f57]">Contact us</Link>.
      </div>

      {/* Areas Covered */}
      <div className="mt-8">
        <h2 className="font-semibold text-lg mb-3">Areas Covered in Our Dubai Databases</h2>
        <p className="text-sm text-[#5a5a5a] mb-4">Our Dubai Property Owner Database and Dubai Buyer Leads cover the city’s most important real estate markets for brokers and marketers.</p>
        <div className="flex flex-wrap gap-2">
          {AREAS_COVERED.map((area, i) => (
            <span key={i} className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#3d3d3d]">
              {area}
            </span>
          ))}
          <span className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#6b6b6b]">+ 200+ communities across Dubai</span>
        </div>
      </div>

      {/* Owner Database Sample Files */}
      <div className="mt-8">
        <h2 className="font-semibold text-lg mb-2">Owner Database: Real Sample Files</h2>
        <p className="text-sm text-[#6b6b6b] mb-6">The database is delivered as individual .xlsx files — one for each premium Dubai community including Dubai Marina, Palm Jumeirah, Downtown Dubai, Business Bay and Emirates Hills.</p>
        
        <p className="text-center text-xs text-[#6b6b6b] mt-2">
          200+ communities • 1,000,000+ verified Dubai owner records • Delivered as ready-to-use Excel files for property marketing
        </p>
      </div>
    </div>
  );
}
