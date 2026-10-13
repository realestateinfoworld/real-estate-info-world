"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HOMEPAGE_STATS, LATEST_RELEASE, PRODUCTS, formatMarketList, getMarket } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

// The preview card cycles through every buyer-lead dataset.
const previewProducts = PRODUCTS.filter((p) => p.type === "buyer");

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % previewProducts.length), 4500);
    return () => clearInterval(id);
  }, []);

  const product = previewProducts[active];
  const { columns, rows, maskedColumn, emphasisColumn } = product.sample;
  // Name, where the buyer is from, and budget
  const shown = [maskedColumn, 1, emphasisColumn];

  return (
    <section className="theme-dark grain relative isolate flex min-h-[100svh] items-center overflow-hidden" aria-label="Hero">
      {/* Background photo, washed into navy toward the copy */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-bg-image object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/80" />
        <div className="absolute -top-40 left-1/4 h-[520px] w-[720px] rounded-full bg-brand-deep/15 blur-[120px]" />
        <div className="grid-lines absolute inset-0 opacity-60" />
      </div>

      <div className="container grid items-center gap-14 pt-32 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pt-36 lg:pb-40">
        {/* Copy */}
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-pale backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand" />
            {LATEST_RELEASE} data — live now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="mt-7 font-display text-[2.9rem] leading-[1.02] text-ivory sm:text-6xl xl:text-[4.6rem]"
          >
            {/* Keyword line for search engines and screen readers; visually a kicker. */}
            <span className="mb-5 block font-sans text-sm font-medium tracking-normal text-stone sm:text-base">
              Dubai Property Owner Database &amp; Miami, California Buyer Leads
            </span>
            Verified owners &amp; buyers,{" "}
            <em className="text-brand-gradient">ready to call today.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.16 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-sand"
          >
            Property owner databases and high-intent buyer leads for brokers and agencies in{" "}
            {formatMarketList()}. CRM-ready Excel, delivered in 10 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.24 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/products" className={buttonVariants({ size: "lg" })}>
              Browse datasets — from ${Math.min(...PRODUCTS.map((p) => p.price))} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#sample" className={buttonVariants({ variant: "outline", size: "lg" })}>
              See sample data
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-sand"
          >
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-brand" /> Delivered in 10 minutes
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> 7-day quality guarantee
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand" /> 99% verified accuracy
            </span>
          </motion.div>
        </div>

        {/* Live sample preview */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-deep/15 blur-3xl" aria-hidden="true" />
          <div className="glass brand-frame relative overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-ivory/[0.06] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
              </div>
              <div className="font-mono text-[11px] text-stone">{product.slug}.xlsx</div>
            </div>

            <div className="flex gap-1.5 overflow-x-auto px-5 pt-4" role="tablist" aria-label="Sample market">
              {previewProducts.map((p, i) => (
                <button
                  key={p.slug}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-1 text-xs transition-colors",
                    i === active
                      ? "bg-brand/15 font-semibold text-brand-pale"
                      : "text-stone hover:text-sand"
                  )}
                >
                  {getMarket(p).name}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto px-2 pt-2 pb-3">
              <AnimatePresence mode="wait">
                <motion.table
                  key={product.slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="sample-table"
                >
                  <thead>
                    <tr>
                      {shown.map((c) => (
                        <th key={c} className={cn(c === 1 && "hidden sm:table-cell")}>{columns[c]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.slice(0, 4).map((row, r) => (
                      <tr key={r}>
                        {shown.map((c) => (
                          <td
                            key={c}
                            className={cn(
                              c === 1 && "hidden sm:table-cell",
                              c === maskedColumn && "blurred-cell",
                              c === emphasisColumn && "font-medium text-brand-pale"
                            )}
                          >
                            {row[c]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between border-t border-ivory/[0.06] px-5 py-3.5 text-xs">
              <span className="text-stone">
                {product.stats[0].value} {product.stats[0].label.toLowerCase()} · {product.version}
              </span>
              <Link href={`/products/${product.slug}`} className="font-semibold text-brand hover:text-brand-pale">
                Get this dataset →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-ivory/[0.06] bg-ink/60 backdrop-blur-md lg:block">
        <div className="container grid grid-cols-4 divide-x divide-ivory/[0.06]">
          {HOMEPAGE_STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-5 first:pl-0">
              <div className="stat-number font-display text-2xl text-ivory">{stat.number}</div>
              <div className="mt-0.5 text-xs tracking-wide text-stone">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
