import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getMarket, getUnitPriceLabel, type Product } from "@/lib/constants";
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
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(10_22_40_/_0.35)] md:p-8",
        featured ? "brand-frame border-transparent shadow-[0_20px_50px_-30px_rgb(16_185_129_/_0.5)]" : "border-line hover:border-brand/40"
      )}
    >
      {featured && (
        <span className="absolute top-0 right-7 rounded-b-xl bg-gradient-to-b from-brand-from to-brand-to px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-on-brand md:right-8">
          BEST VALUE
        </span>
      )}

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold tracking-[0.18em] text-brand">{market.label.toUpperCase()}</span>
        <span className="text-line-strong">·</span>
        <span className="text-[11px] font-medium tracking-wide text-stone">
          {product.type === "owner" ? "Owner database" : "Buyer leads"}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl leading-tight text-ivory">{product.name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-sand">{product.shortDescription}</p>

      <ul className="mt-6 mb-8 space-y-2.5 text-sm">
        {product.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sand">
            <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
              <Check className="h-2.5 w-2.5 text-brand" strokeWidth={3.5} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-line pt-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="stat-number font-display text-4xl text-ivory">${product.price.toLocaleString()}</div>
            <div className="mt-1 text-xs text-stone">One-time · {product.version}</div>
          </div>
          <div className="whitespace-nowrap rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            {getUnitPriceLabel(product)}
          </div>
        </div>
        <span className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ivory text-sm font-semibold text-ink transition-colors group-hover:bg-gradient-to-b group-hover:from-brand-from group-hover:to-brand-to group-hover:text-on-brand">
          Get instant access <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
