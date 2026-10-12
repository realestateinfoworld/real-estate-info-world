import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCTS, COMPARISON_ROWS, formatMarketList } from "@/lib/constants";

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
  return (
    <>
      <PageHeader
        eyebrow="Data products"
        title={
          <>
            Every dataset, <em className="text-gold-gradient">one place.</em>
          </>
        }
        description={`Focused datasets for real estate brokers, property consultants and agencies across ${formatMarketList()}. Every product is a clean, ready-to-use Excel file for your CRM and marketing.`}
      />

      <section className="container py-16 md:py-20">
        <ProductGrid />
      </section>

      {/* Comparison */}
      <section className="section border-t border-line bg-ink-2">
        <div className="container">
          <SectionHeading eyebrow="Side by side" title="Quick comparison" className="mb-10" />
          <div className="overflow-x-auto rounded-3xl border border-line bg-surface">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="sticky left-0 bg-surface p-5 text-left text-xs font-medium tracking-[0.15em] text-stone">
                    FEATURE
                  </th>
                  {PRODUCTS.map((product) => (
                    <th key={product.slug} className="p-5 text-left align-bottom font-medium">
                      <Link href={`/products/${product.slug}`} className="text-ivory hover:text-gold">
                        {product.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.key} className="border-b border-line/60">
                    <td className="sticky left-0 whitespace-nowrap bg-surface p-5 text-stone">{row.label}</td>
                    {PRODUCTS.map((product) => (
                      <td key={product.slug} className="p-5 text-sand">{product.comparison[row.key]}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="sticky left-0 bg-surface p-5 text-stone">Price</td>
                  {PRODUCTS.map((product) => (
                    <td key={product.slug} className="p-5">
                      <span className="stat-number font-display text-2xl text-gold-pale">
                        ${product.price.toLocaleString()}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-stone">
            Need a custom dataset or larger volume?{" "}
            <Link href="/contact" className="text-gold underline underline-offset-4 hover:text-gold-pale">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="From order to outreach in three steps." align="center" className="mb-14" />
          <HowItWorks />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
