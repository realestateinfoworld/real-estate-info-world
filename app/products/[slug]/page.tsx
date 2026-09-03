import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SamplePreview } from "@/components/SamplePreview";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS, getProduct, getMarket, getFaqs } from "@/lib/constants";
import { MetaPixelTracker } from "@/components/MetaPixelTracker";
import { ArrowLeft, Check } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

// Any slug outside PRODUCTS is a 404 rather than a runtime-rendered page.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: [...product.seo.keywords],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const market = getMarket(product);
  const faqs = getFaqs(product);
  const isBuyer = product.type === "buyer";

  return (
    <div className="container py-6">
      <Link href="/products" className="inline-flex items-center text-sm text-[#6b6b6b] mb-4 hover:text-[#3d3d3d]">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
      </Link>

      <div className="grid lg:grid-cols-12 gap-x-6 gap-y-6">
        {/* Meta Pixel Trackers */}
        <MetaPixelTracker
          event="ViewContent"
          parameters={{
            content_name: product.name,
            content_category: "Databases",
            value: product.price,
            currency: "USD",
          }}
        />
        <MetaPixelTracker
          event="InitiateCheckout"
          parameters={{
            value: product.price,
            currency: "USD",
            content_name: product.name,
          }}
        />

        <div className="lg:col-span-8">
          <Badge variant={product.premium ? "primary" : "outline"} className="mb-3">
            {product.premium ? "Premium Product" : "Flagship Product"} • {product.version}
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-lg text-[#5a5a5a]">{product.shortDescription}</p>

          <p className="text-[#5a5a5a] mt-4">{product.description}</p>

          <div className="mt-6">
            <h3 className="font-semibold text-sm tracking-wider text-[#6b6b6b] mb-3">WHAT&apos;S INCLUDED</h3>
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
              {product.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-[#947f57] flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Areas Covered — market focus for SEO & targeting */}
          <div className="mt-6">
            <h3 className="font-semibold text-sm tracking-wider text-[#6b6b6b] mb-3">
              KEY {market.name.toUpperCase()} AREAS COVERED
            </h3>
            <div className="flex flex-wrap gap-2">
              {market.areas.map((area, i) => (
                <span key={i} className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#3d3d3d]">
                  {area}
                </span>
              ))}
              <span className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-3 py-1 text-xs font-medium text-[#6b6b6b]">
                {market.areasMore}
              </span>
            </div>
            <p className="mt-2 text-xs text-[#6b6b6b]">{market.areasNote}</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-semibold">Sample Data Preview</h3>
              <Badge variant="outline" className="text-xs">Actual format</Badge>
            </div>
            <SamplePreview product={product} />
          </div>
        </div>

        <div className="lg:col-span-4">
          <Card className="sticky top-36 z-40">
            <CardContent className="pt-6">
              <div className="text-4xl font-semibold tracking-tighter mb-1">${product.price}</div>
              <div className="text-sm text-[#947f57] font-medium mb-4">
                One-time • {product.paypalButtonId ? "10 min delivery" : "Payment link on WhatsApp"}
              </div>

              <LeadCaptureForm product={product} />

              <div className="mt-6 text-sm space-y-1 text-[#5a5a5a]">
                {product.stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between">
                    <span>{stat.label}</span>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-[10px] text-[#6b6b6b] mt-4 pt-3 border-t">
                {product.paypalButtonId
                  ? "7-day guarantee. PayPal secure."
                  : "7-day guarantee. Payment link sent on WhatsApp."}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cross-sell: other datasets */}
      {PRODUCTS.length > 1 && (
        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-3">Other datasets</h2>
          <div className="flex flex-wrap gap-2">
            {PRODUCTS.filter((p) => p.slug !== product.slug).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="inline-block rounded border border-[#c8c8c8] bg-[#f8f8f8] px-4 py-2 text-sm font-medium text-[#3d3d3d] hover:bg-[#f2f2f2]"
              >
                {p.name} — ${p.price}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="mt-8 max-w-2xl">
        <h2 className="font-semibold text-2xl tracking-tight mb-6">Frequently Asked Questions</h2>
        <div className="divide-y border-y">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <div className="font-medium">{faq.question}</div>
              <div className="text-sm text-[#334155] mt-1.5 pr-4">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.seo.description,
            category: isBuyer ? "Real Estate Buyer Leads" : "Real Estate Owner Database",
            brand: { "@type": "Brand", name: "Real Estate Info World" },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `https://realestate-info.world/products/${product.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
