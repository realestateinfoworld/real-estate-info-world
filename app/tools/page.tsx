import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calculator } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { SITE_URL, jsonLd, pageMetadata } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = pageMetadata({
  title: "Free Real Estate Calculators for Brokers & Agents | 2026",
  description:
    "Free calculators for real estate brokers: Dubai DLD fees, Dubai commission on sales and rentals, and lead ROI with cost per deal. No sign-up needed.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free tools"
        title={
          <>
            Free calculators for brokers. <em className="text-brand-gradient">No sign-up.</em>
          </>
        }
        description="Quote buying costs, work out your commission and check whether a lead list pays for itself."
      />

      <section className="container py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-brand/40 md:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10">
                <Calculator className="h-5 w-5 text-brand" />
              </div>
              <h2 className="mt-5 font-display text-2xl leading-tight text-ivory">{tool.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sand">{tool.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:text-brand-pale">
                Open the calculator <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Free real estate calculators",
            itemListElement: TOOLS.map((tool, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: tool.title,
              url: `${SITE_URL}/tools/${tool.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
