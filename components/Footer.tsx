"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CONTACT, getMarketForPath, MARKET_ORDER, MARKETS, PRODUCTS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const market = getMarketForPath(usePathname());

  const linkClass = "block text-sand transition-colors hover:text-ivory";

  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
              Verified property owner databases and high-intent buyer leads for real estate professionals.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 text-sand hover:text-ivory">
                <Phone className="h-4 w-4 text-gold" /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sand hover:text-ivory">
                <Mail className="h-4 w-4 text-gold" /> {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-4">
            <div className="mb-4 text-xs font-medium tracking-[0.18em] text-ivory">DATASETS</div>
            <div className="space-y-2.5 text-sm">
              {PRODUCTS.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className={linkClass}>
                  {product.name}
                </Link>
              ))}
              <Link href="/products" className="block text-gold hover:text-gold-pale">
                Compare all →
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4 text-xs font-medium tracking-[0.18em] text-ivory">COMPANY</div>
            <div className="space-y-2.5 text-sm">
              <Link href="/about" className={linkClass}>About</Link>
              <Link href="/contact" className={linkClass}>Contact</Link>
              <a
                href={`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
                  `Hello, I'm interested in your ${market.name} real estate data.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Telegram
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4 text-xs font-medium tracking-[0.18em] text-ivory">LEGAL</div>
            <div className="space-y-2.5 text-sm">
              <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>
              <Link href="/terms" className={linkClass}>Terms of Service</Link>
              <Link href="/refund-policy" className={linkClass}>Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-xs text-stone md:flex-row">
          <div>© {year} Real Estate Info World. All rights reserved.</div>
          <div>{MARKET_ORDER.map((key) => MARKETS[key].label).join(" · ")}</div>
        </div>
      </div>
    </footer>
  );
}
