"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ArrowDown, CreditCard, Wallet } from "lucide-react";
import type { Product } from "@/lib/constants";
import { trackGaEvent } from "@/lib/gtag";
import { trackMetaEvent } from "@/lib/metaPixel";
import { purchaseWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Method = "link" | "crypto" | null;

const CRYPTO_ANCHOR = "pay-crypto";

const PaymentMethodContext = createContext<{ method: Method; setMethod: (m: Method) => void }>({
  method: null,
  setMethod: () => {},
});

/**
 * Shares the buyer's chosen payment method between the purchase card (where
 * they choose) and the crypto section further down (shown only for crypto).
 * A link to #pay-crypto opens the page with crypto already chosen.
 */
export function PaymentMethodProvider({ children }: { children: React.ReactNode }) {
  const [method, setMethod] = useState<Method>(null);

  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash === `#${CRYPTO_ANCHOR}`) setMethod("crypto");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return <PaymentMethodContext.Provider value={{ method, setMethod }}>{children}</PaymentMethodContext.Provider>;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.93 11.93 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.87 11.87 0 00-3.480-8.408" />
    </svg>
  );
}

/** Purchase card: the buyer first picks how to pay, then gets that method's next step. */
export function PaymentChooser({ product }: { product: Product }) {
  const { method, setMethod } = useContext(PaymentMethodContext);

  const choose = (m: Exclude<Method, null>) => {
    setMethod(m);
    trackGaEvent("select_payment_method", { payment_type: m, item_id: product.slug });
    if (m === "crypto") {
      // Wait for the crypto section to render, then bring it into view.
      requestAnimationFrame(() =>
        document.getElementById(CRYPTO_ANCHOR)?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  };

  const requestLink = () => {
    trackMetaEvent("Lead", { content_name: product.name, value: product.price, currency: "USD" });
    trackGaEvent("generate_lead", {
      currency: "USD",
      value: product.price,
      lead_source: "product_page",
      payment_type: "payment_link",
      item_id: product.slug,
      item_name: product.name,
    });
  };

  const options = [
    { id: "link" as const, icon: CreditCard, title: "Payment link", note: "Debit or credit card, secure link" },
    { id: "crypto" as const, icon: Wallet, title: "Crypto", note: "USDT · BTC · ETH · SOL" },
  ];

  return (
    <div>
      <div className="mb-3 text-xs font-semibold text-ivory">How would you like to pay?</div>
      <div className="grid grid-cols-2 gap-2.5" role="radiogroup" aria-label="Payment method">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={method === o.id}
            onClick={() => choose(o.id)}
            className={cn(
              "flex flex-col items-start gap-1.5 rounded-2xl border p-3.5 text-left transition-colors",
              method === o.id
                ? "border-brand bg-brand/10 ring-1 ring-brand"
                : "border-line-strong hover:border-brand/50"
            )}
          >
            <o.icon className="h-5 w-5 text-brand" />
            <span className="text-sm font-semibold text-ivory">{o.title}</span>
            <span className="text-[11px] leading-snug text-stone">{o.note}</span>
          </button>
        ))}
      </div>

      {method === "link" && (
        <div className="mt-4">
          <a
            href={purchaseWhatsappUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={requestLink}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get the payment link on WhatsApp
          </a>
          <p className="mt-2.5 text-center text-[11px] leading-relaxed text-stone">
            Send the message and we reply with your secure payment link. File delivered within 10 minutes of payment.
          </p>
        </div>
      )}

      {method === "crypto" && (
        <a
          href={`#${CRYPTO_ANCHOR}`}
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-brand-from to-brand-to text-sm font-semibold text-on-brand"
        >
          Show the crypto addresses <ArrowDown className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

/** The crypto checkout section: rendered only once the buyer has chosen crypto. */
export function CryptoSection({ children }: { children: React.ReactNode }) {
  const { method } = useContext(PaymentMethodContext);
  const ref = useRef<HTMLElement>(null);

  // Arriving on /products/…#pay-crypto: the section didn't exist when the
  // browser looked for the anchor, so scroll to it once it renders.
  useEffect(() => {
    if (method === "crypto" && window.location.hash === `#${CRYPTO_ANCHOR}`) {
      ref.current?.scrollIntoView({ block: "start" });
    }
  }, [method]);

  if (method !== "crypto") return null;
  return (
    <section ref={ref} id={CRYPTO_ANCHOR} className="section scroll-mt-20 border-t border-line">
      {children}
    </section>
  );
}
