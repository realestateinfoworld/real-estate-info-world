"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, getProductsByMarket, type MarketKey } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Every dataset, filterable by market. */
export function ProductGrid() {
  const [market, setMarket] = useState<MarketKey | "all">("all");
  const groups = getProductsByMarket();
  const products = market === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.market === market);

  const filters = [
    { key: "all" as const, label: "All markets", count: PRODUCTS.length },
    ...groups.map((g) => ({ key: g.market.key, label: g.market.name, count: g.products.length })),
  ];

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter by market">
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={market === f.key}
            onClick={() => setMarket(f.key)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors",
              market === f.key
                ? "border-ivory bg-ivory font-semibold text-ink"
                : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
            )}
          >
            {f.label}
            <span className={cn("text-xs", market === f.key ? "text-ink/60" : "text-stone")}>{f.count}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {products.map((product) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} featured={product.slug === PRODUCTS[0].slug} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
