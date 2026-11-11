import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { CaliforniaTransferTaxCalculator } from "@/components/tools/CaliforniaTransferTaxCalculator";
import { CommissionCalculator } from "@/components/tools/CommissionCalculator";
import { CommissionSplitCalculator } from "@/components/tools/CommissionSplitCalculator";
import { DldFeesCalculator } from "@/components/tools/DldFeesCalculator";
import { FloridaDocStampsCalculator } from "@/components/tools/FloridaDocStampsCalculator";
import { LeadRoiCalculator } from "@/components/tools/LeadRoiCalculator";
import { buttonVariants } from "@/components/ui/button";
import { getProduct } from "@/lib/constants";
import { SITE_NAME, SITE_URL, faqPageSchema, jsonLd, pageMetadata } from "@/lib/seo";
import { TOOLS, getTool } from "@/lib/tools";

type Props = {
  params: Promise<{ slug: string }>;
};

/** The interactive part of each tool, by slug. */
const CALCULATORS: Record<string, React.ComponentType> = {
  "dubai-dld-fees-calculator": DldFeesCalculator,
  "dubai-real-estate-commission-calculator": CommissionCalculator,
  "florida-documentary-stamp-tax-calculator": FloridaDocStampsCalculator,
  "california-transfer-tax-calculator": CaliforniaTransferTaxCalculator,
  "real-estate-commission-split-calculator": CommissionSplitCalculator,
  "real-estate-lead-roi-calculator": LeadRoiCalculator,
};

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};

  return pageMetadata({
    title: tool.seo.title,
    description: tool.seo.description,
    path: `/tools/${tool.slug}`,
    keywords: tool.seo.keywords,
  });
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  const Calculator = CALCULATORS[slug];
  if (!tool || !Calculator) notFound();

  const product = getProduct(tool.productSlug);
  if (!product) notFound();

  const url = `${SITE_URL}/tools/${tool.slug}`;
  const others = TOOLS.filter((t) => t.slug !== tool.slug);

  return (
    <>
      <section className="theme-tint relative overflow-hidden border-b border-line">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="brand-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative pt-32 pb-12 md:pt-40 md:pb-14">
          <Link href="/tools" className="inline-flex items-center text-sm text-stone transition-colors hover:text-ivory">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> All free tools
          </Link>
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] text-ivory md:text-6xl">{tool.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand">{tool.excerpt}</p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <Calculator />
      </section>

      <div className="container pb-14 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <article className="legal min-w-0 lg:col-span-7 xl:col-span-8">
            {tool.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <RichText text={bullet} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          {/* The dataset that fits this tool's audience */}
          <aside className="min-w-0 lg:col-span-5 xl:col-span-4">
            <div className="glass brand-frame sticky top-28 rounded-3xl p-7">
              <div className="text-xs tracking-[0.18em] text-stone">FOR BROKERS &amp; AGENTS</div>
              <div className="mt-3 font-display text-2xl leading-tight text-ivory">{product.name}</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sand">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" /> {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/free-sample?dataset=${product.slug}`}
                className={buttonVariants({ className: "mt-6 w-full" })}
              >
                Get a free sample <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/products/${product.slug}`}
                className={buttonVariants({ variant: "secondary", className: "mt-3 w-full" })}
              >
                See the dataset · ${product.price.toLocaleString()}
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <section className="section border-t border-line">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={tool.faqs} />
        </div>
      </section>

      <section className="section border-t border-line bg-ink-2">
        <div className="container">
          <SectionHeading eyebrow="More free tools" title="Other calculators for brokers" className="mb-12" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-brand/40"
              >
                <h3 className="font-display text-xl leading-tight text-ivory">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">{t.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": `${url}#tool`,
                name: tool.title,
                description: tool.seo.description,
                url,
                applicationCategory: "FinanceApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
                publisher: { "@id": `${SITE_URL}/#organization` },
                provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Free tools", item: `${SITE_URL}/tools` },
                  { "@type": "ListItem", position: 3, name: tool.title, item: url },
                ],
              },
              faqPageSchema(tool.faqs),
            ],
          }),
        }}
      />
    </>
  );
}
