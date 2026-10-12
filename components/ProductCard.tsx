import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { getMarket, type Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const market = getMarket(product);

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(201_171_114_/_0.35)] md:p-8",
        featured ? "gold-frame border-transparent" : "border-line hover:border-gold/40"
      )}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold/0 blur-3xl transition-colors duration-500 group-hover:bg-gold/15"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="text-[11px] font-medium tracking-[0.2em] text-gold">
          {market.label.toUpperCase()}
        </div>
        <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-[10px] tracking-wide text-sand">
          {product.type === "owner" ? "Owner database" : "Buyer leads"}
        </span>
      </div>

      <h3 className="mt-5 font-display text-3xl leading-tight text-ivory">{product.name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-sand">{product.shortDescription}</p>

      <ul className="mt-6 mb-8 space-y-2.5 text-sm">
        {product.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sand">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" /> {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-end justify-between border-t border-line pt-6">
        <div>
          <div className="text-xs text-stone">{product.version} · one-time</div>
          <div className="stat-number mt-1 font-display text-4xl text-ivory">
            ${product.price.toLocaleString()}
          </div>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-ivory transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}
