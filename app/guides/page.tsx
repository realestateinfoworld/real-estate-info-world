import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { GUIDES } from "@/lib/guides";
import { SITE_URL, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Real Estate Lead Generation Guides for Brokers | 2026",
  description:
    "Practical guides for brokers: how to find property owners in Dubai and how to get real estate buyer leads in Miami and California in 2026.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guides"
        title={
          <>
            Find owners. Win buyers. <em className="text-gold-gradient">Close more.</em>
          </>
        }
        description="Practical, market-by-market playbooks for real estate brokers and agents on sourcing listings and buyers."
      />

      <section className="container py-16 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-gold/40 md:p-8"
            >
              <div className="text-xs text-stone">{guide.readingMinutes} min read</div>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ivory">{guide.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-sand">{guide.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold group-hover:text-gold-pale">
                Read the guide <ArrowUpRight className="h-4 w-4" />
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
            name: "Real estate lead generation guides",
            itemListElement: GUIDES.map((guide, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: guide.title,
              url: `${SITE_URL}/guides/${guide.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
