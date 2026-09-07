"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  
  // Soft parallax: background moves slightly slower than scroll for premium depth
  const backgroundY = useTransform(scrollY, [0, 600], [0, -28]);

  // Subtle entrance zoom for the cinematic background (Apple/Stripe style)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const trustItems = [
    "Verified Property Owners",
    "High-Intent Buyers",
    "CRM Ready for Brokers",
    "WhatsApp & Calling Ready",
    "Updated Monthly",
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ========================================= */}
      {/* FULL-WIDTH HERO BACKGROUND LAYERS */}
      {/* ========================================= */}

      {/* Base background image with subtle blur + zoom + parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
        initial={{ scale: 1.085, opacity: 0 }}
        animate={hasMounted ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 2.1,
          ease: [0.22, 1.0, 0.32, 1],
        }}
      >
        <Image
          src="/images/hero-background.png"
          alt="Modern laptop displaying a 3D Dubai property model overlaid on a professional real estate data analytics dashboard"
          fill
          className="hero-bg-image object-cover"
          style={{ 
            filter: "blur(1px) brightness(0.97)",
          }}
          priority
          quality={82}
          sizes="100vw"
        />
      </motion.div>

      {/* Primary light/white overlay — preserves premium light SaaS aesthetic */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.86) 38%, rgba(255,255,255,0.72) 62%, rgba(255,255,255,0.58) 100%)"
        }} 
      />

      {/* Secondary soft gradient for depth and text contrast (top + bottom) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 28%, transparent 72%, rgba(255,255,255,0.22) 100%)"
        }} 
      />

      {/* Very subtle additional side gradient for luxury framing (like high-end real estate sites) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 55%)"
        }} 
      />

      {/* ========================================= */}
      {/* CONTENT — Exact original text preserved */}
      {/* ========================================= */}
      <div className="container relative z-20 pt-9 pb-14 md:pt-12 md:pb-16">
        <motion.div
          className="max-w-[1340px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.72,
            ease: [0.22, 1.0, 0.32, 1],
            delay: 0.06,
          }}
        >
          <Badge variant="primary" className="mb-4 text-sm px-3 py-1">
            September 2026 Data Available
          </Badge>

          <h1 className="max-w-4xl text-5xl md:text-[56px] font-semibold tracking-[-2.8px] leading-[1.05] text-balance text-[#3d3d3d]">
            Property Owner Databases &amp; Buyer Leads for brokers.
          </h1>

          <p className="mt-4 max-w-4xl text-xl text-[#5a5a5a]">
            Verified contacts for real estate brokers, consultants, and agencies in Dubai, Miami, California and the UK. Owner leads and high-intent buyer leads across each market&apos;s top areas. CRM-ready Excel. Instant delivery.
          </p>

          {/* One CTA per dataset, kept on a single row on desktop */}
          <div className="flex flex-wrap gap-2 mt-8">
            {PRODUCTS.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <Button size="lg" className="px-4">
                  {product.shortName} — ${product.price.toLocaleString()}
                </Button>
              </Link>
            ))}
          </div>

          <div className="mt-6 max-w-4xl text-sm text-[#6b6b6b]">
            Trusted by 240+ brokerages &amp; agencies • 1,000,000+ verified Dubai owners • 17,000+ buyer leads across Dubai, Miami, California &amp; the UK • 10-minute instant delivery
          </div>

          {/* Fast Delivery Trust Badge - Clean SaaS style */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f2f2f2] px-4 py-1.5 text-xs font-medium text-[#5a5a5a]">
            ⚡ Fastest Delivery in the Industry (10-Minute Instant Access Available)
          </div>

          {/* Record Count Trust Badge - Prominent in hero */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1.5 text-xs font-medium text-[#3d3d3d] shadow-sm">
            1,000,000+ Verified Dubai Property Owners
          </div>

          {/* Buyer Leads Record Count Trust Badge */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1.5 text-xs font-medium text-[#3d3d3d] shadow-sm">
            17,000+ High-Intent Buyer Leads — Dubai, Miami, California &amp; UK
          </div>

          {/* Communities Trust Badge - Prominent in hero */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1.5 text-xs font-medium text-[#3d3d3d] shadow-sm">
            200+ Premium Dubai Communities
          </div>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* FLOATING GLASS CARD (right side) — Optional enhancement */}
      {/* Premium glassmorphism, Apple/Stripe/Sotheby's feel */}
      {/* ========================================= */}
      <motion.div
        className="hero-glass hidden xl:block absolute right-7 2xl:right-10 top-[23%] z-30 w-[268px] rounded-3xl bg-white/68 backdrop-blur-2xl border border-white/65 p-5 text-[#3d3d3d]"
        initial={{ opacity: 0, y: 12, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1.0, 0.32, 1],
          delay: 0.42,
        }}
      >
        <div className="text-[10px] font-medium tracking-[1.6px] text-[#6b6b6b] mb-3.5 uppercase">
          Why professionals choose us
        </div>

        <ul className="space-y-[8.5px] text-[13.2px] leading-tight">
          {trustItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2.5">
              <span className="inline-flex h-[17px] w-[17px] flex-shrink-0 items-center justify-center rounded-full bg-[#e8e0d3]">
                <Check className="h-2.5 w-2.5 text-[#947f57]" strokeWidth={3.5} />
              </span>
              <span className="font-medium text-[#3d3d3d]">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3.5 border-t border-white/50 text-[10px] text-[#6b6b6b] leading-snug">
          Delivered as ready-to-use Excel files within minutes.
        </div>
      </motion.div>
    </section>
  );
}
