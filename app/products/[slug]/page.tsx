import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SamplePreview } from "@/components/SamplePreview";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { HowItWorks } from "@/components/HowItWorks";
import { FaqList } from "@/components/FaqList";
import { PRODUCTS, getProduct, getMarket, getFaqs } from "@/lib/constants";
import { MetaPixelTracker } from "@/components/MetaPixelTracker";
import { SITE_NAME, SITE_URL, faqPageSchema, jsonLd, pageMetadata } from "@/lib/seo";
import { ArrowLeft, Check, FileSpreadsheet, ShieldCheck, Zap } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

// Any slug outside PRODUCTS is a 404 rather than a runtime-rendered page.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return pageMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
    keywords: product.seo.keywords,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const market = getMarket(product);
  const faqs = getFaqs(product);
  const isBuyer = product.type === "buyer";

  const others = PRODUCTS.filter((p) => p.slug !== product.slug);
  const url = `${SITE_URL}/products/${product.slug}`;

  return (
    <>
      {/* Meta Pixel Trackers */}
      <MetaPixelTracker
        event="ViewContent"
        parameters={{
          content_name: product.name,
          content_category: "Databases",
          value: product.price,
          currency: "USD",
        }}
      />
      <MetaPixelTracker
        event="InitiateCheckout"
        parameters={{
          value: product.price,
          currency: "USD",
          content_name: product.name,
        }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="gold-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative pt-32 pb-14 md:pt-40 md:pb-16">
          <Link href="/products" className="inline-flex items-center text-sm text-stone transition-colors hover:text-ivory">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> All datasets
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Badge variant="primary">{market.label}</Badge>
            <Badge>{isBuyer ? "Buyer leads" : "Owner database"}</Badge>
            <Badge>
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
              {product.version}
            </Badge>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-ivory md:text-7xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand">{product.shortDescription}</p>

          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {product.stats.map((stat) => (
              <div key={stat.label} className="bg-ink-2 px-5 py-4">
                <dt className="text-xs text-stone">{stat.label}</dt>
                <dd className="stat-number mt-1 font-display text-2xl text-ivory">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 space-y-14 lg:col-span-7 xl:col-span-8">
            <div>
              <h2 className="eyebrow">{product.shortName} overview</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-sand">{product.description}</p>
            </div>

            <div>
              <h2 className="eyebrow">What&apos;s included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-[15px] text-sand">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">{product.shortName} sample</h2>
              <div className="mt-6">
                <SamplePreview product={product} />
              </div>
            </div>

            {/* Areas Covered — market focus for SEO & targeting */}
            <div>
              <h2 className="eyebrow">Key {market.name} areas covered</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {market.areas.map((area) => (
                  <span key={area} className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-sand">
                    {area}
                  </span>
                ))}
                <span className="rounded-full px-3.5 py-1.5 text-sm text-stone">{market.areasMore}</span>
              </div>
              <p className="mt-4 text-sm text-stone">{market.areasNote}</p>
            </div>

            {product.guide && (
              <article className="legal border-t border-line pt-4">
                {product.guide.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </article>
            )}
          </div>

          {/* Purchase card */}
          <aside id="buy" className="order-first min-w-0 scroll-mt-24 lg:order-none lg:col-span-5 xl:col-span-4">
            <div className="glass gold-frame sticky top-28 rounded-3xl p-7">
              <div className="text-xs tracking-[0.18em] text-stone">ONE-TIME PAYMENT</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="stat-number font-display text-6xl text-ivory">${product.price.toLocaleString()}</span>
                <span className="text-sm text-stone">USD</span>
              </div>
              <div className="mt-2 mb-7 text-sm text-gold">Payment link sent on WhatsApp</div>

              <LeadCaptureForm product={product} />

              <div className="mt-7 space-y-3 border-t border-line pt-6 text-sm">
                {[
                  { icon: Zap, text: "Delivered within 10 minutes" },
                  { icon: FileSpreadsheet, text: "CRM-ready Excel (.xlsx)" },
                  { icon: ShieldCheck, text: "7-day quality guarantee" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sand">
                    <item.icon className="h-4 w-4 text-gold" /> {item.text}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* How it works */}
      <section className="section border-t border-line bg-ink-2">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="From order to outreach in three steps." align="center" className="mb-14" />
          <HowItWorks />
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title={`${product.shortName} FAQ`} />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Cross-sell: other datasets */}
      {others.length > 0 && (
        <section className="section border-t border-line">
          <div className="container">
            <SectionHeading eyebrow="Explore more" title="Other real estate datasets" className="mb-12" />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {others.slice(0, 3).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "@id": `${url}#product`,
                name: product.name,
                description: product.seo.description,
                url,
                sku: product.slug,
                image: `${url}/opengraph-image`,
                category: isBuyer ? "Real Estate Buyer Leads" : "Real Estate Owner Database",
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: {
                  "@type": "Offer",
                  url,
                  price: product.price,
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  seller: { "@id": `${SITE_URL}/#organization` },
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Datasets", item: `${SITE_URL}/products` },
                  { "@type": "ListItem", position: 3, name: product.name, item: url },
                ],
              },
              faqPageSchema(faqs),
            ],
          }),
        }}
      />
    </>
  );
}
