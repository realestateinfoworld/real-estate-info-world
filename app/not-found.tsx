import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";

// Next.js adds its own noindex tag to 404 responses; override the root
// layout's "index, follow" too so the page doesn't carry both.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Branded 404 that sends visitors on to the datasets instead of a dead end. */
export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404 · Page not found"
        title={
          <>
            This page doesn&apos;t exist. <em className="text-brand-gradient">Your next lead does.</em>
          </>
        }
        description="The link may be old or mistyped. Here's where to go instead."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className={buttonVariants({ size: "lg" })}>
            Browse datasets <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Go to homepage
          </Link>
        </div>
      </PageHeader>

      <section className="container py-16 md:py-20">
        <h2 className="mb-8 font-display text-2xl text-ivory md:text-3xl">Popular datasets</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.slice(0, 3).map((product, i) => (
            <ProductCard key={product.slug} product={product} featured={i === 0} />
          ))}
        </div>
      </section>
    </>
  );
}
