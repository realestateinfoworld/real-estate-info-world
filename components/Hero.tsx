import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { HeroBuyCard, type HeroOffer } from "@/components/HeroBuyCard";
import { buttonVariants } from "@/components/ui/button";
import { HOMEPAGE_STATS, LATEST_RELEASE, PRODUCTS, formatMarketList, getProduct } from "@/lib/constants";
import { purchaseWhatsappUrl } from "@/lib/whatsapp";

const lowestPrice = Math.min(...PRODUCTS.map((p) => p.price));
// The best seller, offered straight from the hero.
const ownerDb = getProduct("owner-database")!;
const miamiLeads = getProduct("miami-buyer-leads")!;
const buyerLeadsFrom = Math.min(...PRODUCTS.filter((p) => p.type === "buyer").map((p) => p.price));

const OWNER_DB_POINTS = [
  "1,000,000+ owners across 200+ communities",
  "Building, unit, owner name, phone, mobile & email",
  "Excel file, delivered within 10 minutes",
  "Card or USDT · 7-day refund policy",
];

const MIAMI_POINTS = [
  "1,500+ Miami-Dade buyers, sourced this month",
  "Verified email, phone, budget & timeframe",
  "Excel file, delivered within 10 minutes",
  "Card or USDT · 7-day refund policy",
];

const OFFERS: HeroOffer[] = [
  {
    id: "dubai",
    tab: "Dubai owners",
    badge: "BEST SELLER · ONE-TIME PAYMENT",
    name: ownerDb.name,
    price: ownerDb.price,
    points: OWNER_DB_POINTS,
    buyHref: `/products/${ownerDb.slug}#buy`,
    whatsappHref: purchaseWhatsappUrl(ownerDb),
  },
  {
    id: "miami",
    tab: "Miami buyers",
    badge: "FOR MIAMI AGENTS",
    name: miamiLeads.name,
    price: miamiLeads.price,
    points: MIAMI_POINTS,
    buyHref: `/products/${miamiLeads.slug}#buy`,
    whatsappHref: purchaseWhatsappUrl(miamiLeads),
  },
];

const PROMISES = [
  "1M+ verified Dubai owners",
  "Pay by card or USDT",
  "Full file delivered in 10 minutes",
  "7-day quality guarantee",
];

/**
 * Homepage hero. The copy is static server HTML (the H1 is the LCP element);
 * the owner database's buy card sits beside it, so buying is the action above
 * the fold.
 */
export function Hero() {
  return (
    <section className="theme-tint grain relative isolate overflow-hidden border-b border-line" aria-label="Hero">
      {/* Background photo, washed out to a faint texture behind the copy */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-bg-image object-cover opacity-[0.07]"
        />
        <div className="absolute -top-40 left-1/4 h-[520px] w-[720px] rounded-full bg-brand-deep/15 blur-[120px]" />
        <div className="grid-lines absolute inset-0 opacity-60" />
      </div>

      <div className="container grid items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:pt-40 lg:pb-24">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-pale backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand" />
            {LATEST_RELEASE} data — live now
          </div>

          <h1 className="mt-7 font-display text-[2.6rem] leading-[1.04] text-ivory sm:text-6xl xl:text-[4.25rem]">
            {/* Keyword line for search engines and screen readers; visually a kicker. */}
            <span className="mb-5 block font-sans text-sm font-medium tracking-normal text-stone sm:text-base">
              Dubai Property Owner Database &amp; Miami, California Buyer Leads
            </span>
            Verified owners &amp; buyers.{" "}
            <em className="text-brand-gradient">Reach them before they list.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-sand">
            Property owner databases and high-intent buyer leads for brokers and agencies in{" "}
            {formatMarketList()}. Get the full CRM-ready Excel file today, from ${lowestPrice}.
          </p>

          {/* Phones: the buy card is a scroll away, so offer the jump straight after the pitch */}
          <a href="#hero-buy" className={buttonVariants({ size: "lg", className: "mt-8 w-full lg:hidden" })}>
            Get the owner database · ${ownerDb.price} <ArrowRight className="h-4 w-4" />
          </a>

          <ul className="mt-8 grid max-w-xl gap-x-6 gap-y-3 text-[15px] text-sand sm:grid-cols-2">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
                  <Check className="h-3 w-3 text-brand" strokeWidth={3.5} />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <Link
            href="/products"
            className="mt-9 inline-flex items-center gap-2 text-[15px] font-semibold text-brand hover:text-brand-pale"
          >
            See all datasets &amp; prices <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Buy card: Dubai owner database or Miami buyer leads */}
        <div id="hero-buy" className="relative min-w-0 scroll-mt-28">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-deep/15 blur-3xl" aria-hidden="true" />
          <HeroBuyCard
            offers={OFFERS}
            footer={
              <Link
                href="/products"
                className="mt-5 block text-center text-sm font-semibold text-brand hover:text-brand-pale"
              >
                Buyer leads for California, Dubai &amp; UK from ${buyerLeadsFrom.toLocaleString()} →
              </Link>
            }
          />
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-line bg-ink/70 backdrop-blur-md">
        <dl className="container grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {HOMEPAGE_STATS.map((stat) => (
            <div key={stat.label} className="py-5 lg:px-6 lg:first:pl-0">
              <dd className="stat-number font-display text-2xl text-ivory">{stat.number}</dd>
              <dt className="mt-0.5 text-xs tracking-wide text-stone">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
