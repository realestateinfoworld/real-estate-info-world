import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SampleRequestForm } from "@/components/SampleRequestForm";
import { SheetPreview } from "@/components/SheetPreview";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqList } from "@/components/FaqList";
import { PRODUCTS, getMarket } from "@/lib/constants";
import { SITE_URL, faqPageSchema, jsonLd, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Free Sample: Dubai Property Owner Database & Buyer Leads",
  description:
    "Get a free sample of the Dubai property owner database or Miami, California, Dubai and UK buyer leads. Real records, real Excel columns, no card needed.",
  path: "/free-sample",
  keywords: [
    "Dubai property owner database sample",
    "Dubai real estate database free sample",
    "free real estate leads sample",
    "buyer leads sample",
    "Miami buyer leads sample",
    "California buyer leads sample",
  ],
});

const lowestPrice = Math.min(...PRODUCTS.map((p) => p.price));

const SAMPLE_FAQS = [
  {
    question: "Is the sample really free?",
    answer:
      "Yes. There is no payment and no card. Tell us which dataset you want to check and where to send it.",
  },
  {
    question: "What is in the free sample?",
    answer:
      "A short extract of real records from the current release, in exactly the same Excel columns as the full file, so you can judge the data quality and test the import into your CRM.",
  },
  {
    question: "How fast will I get it?",
    answer:
      "We send samples by email or WhatsApp, usually within a few hours. Add your WhatsApp number, or message us after you submit the form, to get it faster.",
  },
  {
    question: "Can I get a sample of more than one dataset?",
    answer:
      "Yes. Submit the form once for each dataset you want to check: the Dubai Property Owner Database and the Dubai, Miami, California and UK buyer leads all have samples.",
  },
  {
    question: "What happens after I get the sample?",
    answer: `Nothing automatic. If the data fits, order the full file on its dataset page from $${lowestPrice}, pay by card or USDT, and it is delivered within 10 minutes of payment confirmation. Every purchase has a 7-day quality guarantee.`,
  },
];

const STEPS = [
  { title: "Request", body: "Pick a dataset and tell us where to send the sample." },
  { title: "Check", body: "Open the Excel extract, read the records and test your CRM import." },
  { title: "Decide", body: "Order the full file only if the data is right for you." },
];

function Steps({ className }: { className?: string }) {
  return (
    <ol className={cn("max-w-2xl gap-5 sm:grid-cols-3", className)}>
      {STEPS.map((step, i) => (
        <li key={step.title}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b from-brand-from to-brand-to font-display text-sm text-on-brand">
            {i + 1}
          </div>
          <h2 className="mt-3 font-semibold text-ivory">{step.title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-sand">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export default function FreeSamplePage() {
  return (
    <>
      {/* Header with the form beside it, so the request is possible without scrolling */}
      <section className="theme-tint relative overflow-hidden border-b border-line">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="brand-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container relative grid items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:pt-40 lg:pb-20">
          <div className="min-w-0">
            <div className="eyebrow">Free sample</div>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ivory md:text-5xl">
              Free sample of the Dubai property owner database &amp; buyer leads.{" "}
              <em className="text-brand-gradient">Check it before you buy.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand">
              Real records from the current release, in the same Excel columns as the full dataset. No
              payment, no card.
            </p>
            <Steps className="mt-9 hidden lg:grid" />
          </div>

          <div className="relative min-w-0">
            <div className="brand-frame relative rounded-3xl bg-surface p-7 shadow-[0_40px_90px_-40px_rgb(10_22_40_/_0.35)] md:p-8">
              <div className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-brand">
                FREE · NO CARD NEEDED
              </div>
              <h2 className="mt-4 font-display text-2xl leading-tight text-ivory">Request your free sample</h2>
              <p className="mt-2 mb-6 text-sm leading-relaxed text-sand">
                Choose a dataset and tell us where to send it.
              </p>
              <SampleRequestForm source="free-sample" />
            </div>
          </div>

          {/* Phones: heading, then the form, then the steps */}
          <Steps className="grid lg:hidden" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What the file looks like"
            title="The same columns as the full dataset."
            description="Switch tabs to see each dataset. Names are masked in this preview; your sample shows real records."
            align="center"
            className="mb-12"
          />
          <div className="mx-auto max-w-5xl">
            <SheetPreview products={PRODUCTS} />
          </div>
        </div>
      </section>

      {/* Per-dataset samples */}
      <section className="section border-t border-line bg-ink-2">
        <div className="container">
          <SectionHeading
            eyebrow="Samples available"
            title="A free sample of every dataset."
            description="Each sample uses the columns of its full file."
            className="mb-12"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((product) => (
              <div key={product.slug} className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
                <div className="text-[11px] font-bold tracking-[0.18em] text-brand">
                  {getMarket(product).label.toUpperCase()}
                </div>
                <h3 className="mt-3 font-display text-xl leading-tight text-ivory">{product.name} sample</h3>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-sand">
                  {product.sample.columns.map((column) => (
                    <li key={column} className="flex items-center gap-2.5">
                      <Check className="h-3.5 w-3.5 flex-shrink-0 text-brand" strokeWidth={3} />
                      {column}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5 text-sm">
                  <span className="text-stone">
                    Full file: {product.stats[0].value} {product.stats[0].label.toLowerCase()}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center gap-1 whitespace-nowrap font-semibold text-brand hover:text-brand-pale"
                  >
                    ${product.price.toLocaleString()} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Free sample FAQ" />
          <FaqList faqs={SAMPLE_FAQS} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Free sample", item: `${SITE_URL}/free-sample` },
                ],
              },
              faqPageSchema(SAMPLE_FAQS),
            ],
          }),
        }}
      />
    </>
  );
}
