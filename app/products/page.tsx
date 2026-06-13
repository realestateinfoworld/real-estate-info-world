import { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Products",
  description: "Compare our Dubai real estate databases: Property Owner Database and verified Buyer Leads. Both delivered in 10 minutes (instant processing). CRM-ready Excel format.",
};

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mb-10">
        <Badge variant="outline" className="mb-3">DATA PRODUCTS</Badge>
        <h1 className="text-4xl font-semibold tracking-tight">Professional Dubai Real Estate Data</h1>
        <p className="mt-3 text-lg text-[#5a5a5a]">
          Two focused products. Both delivered as clean, ready-to-use Excel files.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
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
                ["Best For", "Sourcing listings & owner outreach", "High-value buyer conversions"],
                ["Record Count", "1,000,000+", "10,000+"],
                ["Accuracy", "99%", "99%"],
                ["Price", "$250", "$1,200"],
                ["Data Type", "Property Owners", "Active Buyers"],
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

      <div className="text-center mt-10 text-sm text-[#6b6b6b]">
        Need a custom dataset or larger volume? <Link href="/contact" className="underline text-[#947f57]">Contact us</Link>.
      </div>

      {/* Owner Database Sample Files */}
      <div className="mt-16">
        <h2 className="font-semibold text-lg mb-2">Owner Database: Real Sample Files</h2>
        <p className="text-sm text-[#6b6b6b] mb-6">The database is delivered as individual .xlsx files — one for each premium Dubai community.</p>
        
        <p className="text-center text-xs text-[#6b6b6b] mt-4">
          85+ communities • 1,000,000+ verified owner records • Delivered as ready-to-use Excel files
        </p>
      </div>
    </div>
  );
}
