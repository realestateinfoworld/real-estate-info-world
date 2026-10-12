import Link from "next/link";
import { ArrowRight, Check, Database, FileSpreadsheet, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { Hero } from "@/components/Hero";
import { AreasMarquee } from "@/components/AreasMarquee";
import { ProductGrid } from "@/components/ProductGrid";
import { SamplePreview } from "@/components/SamplePreview";
import { SectionHeading } from "@/components/SectionHeading";
import { HowItWorks } from "@/components/HowItWorks";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  HOMEPAGE_STATS,
  PRODUCTS,
  TESTIMONIALS,
  formatMarketList,
  getProductsByMarket,
} from "@/lib/constants";

const HOME_FAQS = [
  {
    question: "How do I pay?",
    answer:
      "Enter your name and email on the dataset page and we send you a secure payment link on WhatsApp. Once payment is confirmed, your file is on its way.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Files are delivered via secure download link within 10 minutes of payment confirmation, with instant processing available.",
  },
  {
    question: "What format is the data in?",
    answer:
      "Every dataset is a clean Microsoft Excel (.xlsx) file with consistent columns that import directly into HubSpot, Salesforce, Pipedrive or any other CRM.",
  },
  {
    question: "What if the data doesn't meet your standards?",
    answer:
      "Every purchase is covered by our 7-day refund policy. If the data quality does not meet our published standards, contact us within 7 days of delivery.",
  },
];

export default function Home() {
  const marketGroups = getProductsByMarket();
  const flagship = PRODUCTS[0];

  return (
    <>
      <Hero />
      <AreasMarquee />

      {/* Stats — the hero strip covers desktop */}
      <section className="container grid grid-cols-2 gap-px overflow-hidden py-12 lg:hidden">
        {HOMEPAGE_STATS.map((stat) => (
          <div key={stat.label} className="py-4">
            <div className="stat-number font-display text-4xl text-ivory">{stat.number}</div>
            <div className="mt-1 text-xs text-stone">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* DATASETS */}
      <section className="section pt-8 lg:pt-28">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="The datasets"
              title={
                <>
                  Choose your market. <em className="text-gold-gradient">Start calling today.</em>
                </>
              }
              description={`Owner databases and buyer leads across ${formatMarketList()}, each one verified and delivered as a CRM-ready Excel file.`}
            />
            <Link href="/products" className="flex items-center gap-1.5 whitespace-nowrap text-sm text-gold hover:text-gold-pale">
              Compare all datasets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* WHY US — bento */}
      <section className="section relative border-y border-line bg-ink-2">
        <div className="gold-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative">
          <SectionHeading
            eyebrow="Why brokers choose us"
            title="Data you can act on the moment it lands."
            align="center"
            className="mb-14"
          />

          <div className="grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-12 lg:col-span-6 lg:row-span-2">
              <div className="gold-frame relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-surface p-8 md:p-10">
                <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative">
                  <ShieldCheck className="h-8 w-8 text-gold" />
                  <h3 className="mt-6 text-2xl font-medium text-ivory">Verified at source</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-sand">
                    Owner records are cross-checked against official property records; buyer leads are validated
                    against the campaign they were captured from. Phone and email verified in every market.
                  </p>
                </div>
                <div className="relative mt-12">
                  <div className="stat-number font-display text-8xl leading-none text-gold-gradient md:text-9xl">99%</div>
                  <div className="mt-2 text-sm text-stone">Verified accuracy across every dataset</div>
                </div>
              </div>
            </Reveal>

            {[
              {
                icon: FileSpreadsheet,
                title: "CRM-native structure",
                body: "Consistent columns built for direct import into your CRM. No cleanup required.",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp & call ready",
                body: "Direct mobile numbers, ready for WhatsApp outreach and cold calling from day one.",
              },
              {
                icon: Zap,
                title: "10-minute delivery",
                body: "Your file arrives within minutes of payment — the fastest delivery in the industry.",
              },
              {
                icon: Database,
                title: "Refreshed monthly",
                body: `Every dataset is updated each month. Current release: ${flagship.version}.`,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.08 * (i + 1)} className="md:col-span-6 lg:col-span-3">
                <div className="h-full rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-gold/30">
                  <item.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 text-lg font-medium text-ivory">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE */}
      <section id="sample" className="section scroll-mt-20">
        <div className="container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="min-w-0">
            <SectionHeading
              eyebrow="See exactly what you get"
              title="Real columns. Real format. No surprises."
              description="This is the actual layout of the file you receive — the same columns, ready to import. Sensitive fields are masked in the preview only."
            />
            <ul className="mt-8 space-y-3 text-[15px] text-sand">
              {flagship.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={`/products/${flagship.slug}`} className={buttonVariants({ className: "mt-10" })}>
              Get the {flagship.shortName} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0">
            <SamplePreview product={flagship} />
          </Reveal>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section border-t border-line">
        <div className="container">
          <SectionHeading
            eyebrow="Coverage"
            title="The neighbourhoods where deals happen."
            description="Verified records from the most active, highest-value areas in every market we cover."
            className="mb-14"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {marketGroups.map(({ market, products }, i) => (
              <Reveal key={market.key} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-line bg-surface p-7 md:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl text-ivory">{market.label}</h3>
                    <span className="text-xs text-stone">
                      {products.length} dataset{products.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {market.areas.map((area) => (
                      <span key={area} className="rounded-full border border-line-strong px-3 py-1 text-xs text-sand">
                        {area}
                      </span>
                    ))}
                    <span className="rounded-full px-3 py-1 text-xs text-stone">{market.areasMore}</span>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
                    {products.map((p) => (
                      <Link key={p.slug} href={`/products/${p.slug}`} className="text-sm text-gold hover:text-gold-pale">
                        {p.type === "owner" ? "Owner database" : "Buyer leads"} · ${p.price.toLocaleString()} →
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section border-t border-line bg-ink-2">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="From order to outreach in three steps."
            align="center"
            className="mb-14"
          />
          <HowItWorks />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section border-t border-line">
        <div className="container">
          <SectionHeading
            eyebrow="From real estate professionals"
            title="Trusted by brokers who close."
            className="mb-14"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                  <div className="font-display text-6xl leading-none text-gold/40" aria-hidden="true">“</div>
                  <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-sand">{t.quote}</blockquote>
                  <figcaption className="mt-8 border-t border-line pt-5 text-sm">
                    <div className="font-medium text-ivory">{t.name}</div>
                    <div className="text-stone">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Questions"
            title="Everything you need to know."
            description={
              <>
                Something else on your mind?{" "}
                <Link href="/contact" className="text-gold underline underline-offset-4 hover:text-gold-pale">
                  Talk to us
                </Link>
                .
              </>
            }
          />
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
