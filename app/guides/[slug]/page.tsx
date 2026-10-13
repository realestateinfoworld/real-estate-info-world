import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { buttonVariants } from "@/components/ui/button";
import { getProduct } from "@/lib/constants";
import { GUIDES, getGuide } from "@/lib/guides";
import { SITE_NAME, SITE_URL, faqPageSchema, jsonLd, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const base = pageMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.seo.keywords,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: guide.published,
      modifiedTime: guide.updated,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const product = getProduct(guide.productSlug);
  if (!product) notFound();

  const url = `${SITE_URL}/guides/${guide.slug}`;
  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <section className="theme-dark relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="brand-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative pt-32 pb-14 md:pt-40 md:pb-16">
          <Link href="/guides" className="inline-flex items-center text-sm text-stone transition-colors hover:text-ivory">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> All guides
          </Link>
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] text-ivory md:text-6xl">{guide.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand">{guide.excerpt}</p>
          <div className="mt-6 text-sm text-stone">
            Updated <time dateTime={guide.updated}>{dateFormat.format(new Date(guide.updated))}</time> ·{" "}
            {guide.readingMinutes} min read
          </div>
        </div>
      </section>

      <div className="container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <article className="legal min-w-0 lg:col-span-7 xl:col-span-8">
            {guide.sections.map((section) => (
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

          {/* The dataset this guide recommends */}
          <aside className="min-w-0 lg:col-span-5 xl:col-span-4">
            <div className="glass brand-frame sticky top-28 rounded-3xl p-7">
              <div className="text-xs tracking-[0.18em] text-stone">RECOMMENDED DATASET</div>
              <div className="mt-3 font-display text-2xl leading-tight text-ivory">{product.name}</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sand">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-baseline gap-2 border-t border-line pt-6">
                <span className="stat-number font-display text-5xl text-ivory">${product.price.toLocaleString()}</span>
                <span className="text-sm text-stone">USD · one-time</span>
              </div>
              <Link href={`/products/${product.slug}`} className={buttonVariants({ className: "mt-6 w-full" })}>
                Get the {product.shortName} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <section className="section border-t border-line">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={guide.faqs} />
        </div>
      </section>

      {others.length > 0 && (
        <section className="section border-t border-line">
          <div className="container">
            <SectionHeading eyebrow="Keep reading" title="More guides" className="mb-12" />
            <div className="grid gap-5 md:grid-cols-2">
              {others.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-brand/40"
                >
                  <h3 className="font-display text-2xl leading-tight text-ivory">{g.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-sand">{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": `${url}#article`,
                headline: guide.title,
                description: guide.seo.description,
                url,
                mainEntityOfPage: url,
                image: `${url}/opengraph-image`,
                datePublished: guide.published,
                dateModified: guide.updated,
                inLanguage: "en",
                author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
                publisher: { "@id": `${SITE_URL}/#organization` },
                about: { "@id": `${SITE_URL}/products/${product.slug}#product` },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
                  { "@type": "ListItem", position: 3, name: guide.title, item: url },
                ],
              },
              faqPageSchema(guide.faqs),
            ],
          }),
        }}
      />
    </>
  );
}
