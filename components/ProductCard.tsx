import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getMarket, type Product } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const market = getMarket(product);

  return (
    <Card className="product-card flex flex-col">
      <CardContent className="pt-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[11px] font-medium tracking-wider text-[#947f57] mb-1">
              {market.label.toUpperCase()}
            </div>
            <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
            <p className="text-sm text-[#6b6b6b]">{product.version}</p>
          </div>
          {product.premium && <Badge variant="primary">Premium</Badge>}
        </div>

        <div className="mb-5">
          <span className="text-4xl font-semibold tabular-nums tracking-tighter">${product.price}</span>
          <span className="text-sm text-[#6b6b6b] ml-1">USD</span>
        </div>

        <p className="text-[#5a5a5a] text-[15px] mb-6">{product.shortDescription}</p>

        <ul className="space-y-2 text-sm">
          {product.features.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-[#5a5a5a]">
              <span className="mt-1 text-[#947f57]">•</span> {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-0 pb-6 flex flex-col gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="btn btn-primary w-full justify-center"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/products"
          className="text-xs text-[#6b6b6b] hover:text-[#3d3d3d]"
        >
          Compare all datasets →
        </Link>
      </CardFooter>
    </Card>
  );
}
