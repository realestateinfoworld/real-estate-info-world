import Link from "next/link";
import { ArrowRight, Check, Lock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { getProduct } from "@/lib/constants";
import { purchaseWhatsappUrl } from "@/lib/whatsapp";

const miami = getProduct("miami-buyer-leads")!;

const POINTS = [
  "Sourced this month from Google and social media campaigns",
  "Verified email and phone on every lead",
  "Target area, property type, bedrooms, budget (USD) and timeframe",
  "US and international buyers, with the buyer's country",
];

export const MIAMI_LINKS = [
  { href: "/guides/miami-real-estate-buyer-leads", label: "How to get buyer leads in Miami" },
  { href: "/guides/miami-luxury-condo-buyers", label: "Miami luxury condo buyers" },
  { href: "/tools/florida-documentary-stamp-tax-calculator", label: "Florida doc stamp tax calculator" },
];

/** Homepage section for Miami agents: the buyer leads file, with masked sample buyers. */
export function MiamiSpotlight() {
  // Sample rows: Buyer, Country, Target Area, Property Type, Est. Budget, Timeframe.
  const rows = miami.sample.rows.slice(0, 4);

  return (
    <section className="section border-b border-line">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="For Miami agents"
            title={
              <>
                Selling in Miami? <em className="text-brand-gradient">1,500+ active buyers this month.</em>
              </>
            }
            description="Real people searching to buy in Miami-Dade right now, from Brickell and Edgewater to Sunny Isles and Bal Harbour. Not a recycled list."
          />
          <ul className="mt-8 space-y-3 text-[15px] text-sand">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
                  <Check className="h-3 w-3 text-brand" strokeWidth={3.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={`/products/${miami.slug}#buy`} className={buttonVariants({ size: "lg" })}>
              Get Miami buyer leads · ${miami.price.toLocaleString()} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={purchaseWhatsappUrl(miami)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <MessageCircle className="h-4 w-4" /> Buy on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-stone">
            Miami guides:{" "}
            {MIAMI_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href} className="text-brand underline-offset-4 hover:text-brand-pale hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>

        <div className="min-w-0 space-y-3">
          {rows.map(([buyer, country, area, type, budget, timeframe]) => (
            <div
              key={buyer}
              className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_18px_44px_-30px_rgb(10_22_40_/_0.45)]"
            >
              <div className="truncate font-semibold text-ivory">{buyer}</div>
              <div className="stat-number text-right font-display text-lg text-brand">{budget}</div>
              <div className="col-span-2 text-sm text-stone sm:col-span-1">
                {country} · {area} · {type}
              </div>
              <div className="col-span-2 text-xs font-semibold text-sand sm:col-span-1 sm:text-right">{timeframe}</div>
            </div>
          ))}
          <p className="flex items-center gap-2 pt-1 text-sm text-stone">
            <Lock className="h-4 w-4 text-brand" /> Names masked. The full file has every buyer&apos;s phone and email.
          </p>
        </div>
      </div>
    </section>
  );
}
