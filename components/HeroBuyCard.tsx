"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroOffer {
  id: string;
  tab: string;
  badge: string;
  name: string;
  price: number;
  points: readonly string[];
  buyHref: string;
  whatsappHref: string;
}

/**
 * The hero's buy card, with a tab per offer. Visitors in the US start on the
 * Miami buyer leads; everyone else starts on the Dubai owner database. Every
 * offer has the same shape, so switching keeps the card's height.
 */
export function HeroBuyCard({ offers, footer }: { offers: readonly HeroOffer[]; footer: React.ReactNode }) {
  const [active, setActive] = useState(offers[0].id);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) return;
    let cancelled = false;
    fetch("/api/geo")
      .then((r) => r.json())
      .then(({ country }) => {
        if (!cancelled && country === "US" && offers.some((o) => o.id === "miami")) setActive("miami");
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [offers, touched]);

  const offer = offers.find((o) => o.id === active) ?? offers[0];

  return (
    <div className="brand-frame relative rounded-3xl bg-surface p-7 shadow-[0_40px_90px_-40px_rgb(10_22_40_/_0.35)] md:p-8">
      <div className="grid grid-cols-2 gap-1 rounded-full border border-line bg-ink-2 p-1" role="tablist" aria-label="Dataset">
        {offers.map((o) => (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={o.id === offer.id}
            onClick={() => {
              setTouched(true);
              setActive(o.id);
            }}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-semibold transition-colors",
              o.id === offer.id ? "bg-ivory text-ink" : "text-stone hover:text-ivory"
            )}
          >
            {o.tab}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-6">
        <div className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-brand-pale">
          {offer.badge}
        </div>
        <h2 className="mt-4 font-display text-2xl leading-tight text-ivory">{offer.name}</h2>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="stat-number font-display text-5xl text-ivory">${offer.price.toLocaleString()}</span>
          <span className="text-sm text-stone">USD · no subscription</span>
        </div>
        <ul className="mt-6 space-y-3 text-[15px] text-sand">
          {offer.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
                <Check className="h-3 w-3 text-brand" strokeWidth={3.5} />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <Link href={offer.buyHref} className={buttonVariants({ size: "lg", className: "mt-7 w-full" })}>
          Buy now <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={offer.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-3 w-full" })}
        >
          <MessageCircle className="h-4 w-4" /> Buy on WhatsApp
        </a>
      </div>
      {footer}
    </div>
  );
}
