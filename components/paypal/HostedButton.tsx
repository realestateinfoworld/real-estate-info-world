"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackMetaEvent } from "@/lib/metaPixel";
import type { Product } from "@/lib/constants";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_SDK =
  "https://www.paypal.com/sdk/js?client-id=BAAfvCV7fZEPJ7_q8Vg4AkKdUjnEaHb_RiWFhfqwfTDx1piR_Hdo2BTaRbNOxI8tCBymk1GivPUO3IYme8&components=hosted-buttons&disable-funding=venmo&currency=USD";

interface HostedButtonProps {
  product: Product;
}

/**
 * Renders the PayPal hosted button for any product. One component covers every
 * dataset — the hosted button id comes from the product record.
 */
export function HostedButton({ product }: HostedButtonProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const containerId = `paypal-btn-${product.slug}`;
  const buttonId = product.paypalButtonId;

  useEffect(() => {
    if (!buttonId) return;

    const renderButton = () => {
      const container = document.getElementById(containerId);
      if (!container || !window.paypal) return;

      container.innerHTML = "";

      window.paypal
        .HostedButtons({ hostedButtonId: buttonId })
        .render(`#${containerId}`)
        .then(() => {
          setLoading(false);
          trackMetaEvent("Purchase", {
            value: product.price,
            currency: "USD",
            content_name: product.name,
          });
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    };

    const loadScript = () => {
      if (window.paypal?.HostedButtons) {
        renderButton();
        return;
      }

      const script = document.createElement("script");
      script.src = PAYPAL_SDK;
      script.async = true;

      script.onload = () => renderButton();
      script.onerror = () => {
        setError(true);
        setLoading(false);
      };

      document.body.appendChild(script);
    };

    const t = setTimeout(loadScript, 100);
    return () => clearTimeout(t);
  }, [containerId, buttonId, product.price, product.name]);

  // Sold by enquiry: the lead form handles the CTA instead.
  if (!buttonId) return null;

  if (error) {
    return (
      <a
        href={`https://www.paypal.com/ncp/payment/${buttonId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="accent" className="w-full">
          Buy {product.name} — ${product.price.toLocaleString()} USD
        </Button>
      </a>
    );
  }

  return (
    <div className="paypal-wrapper">
      <div id={containerId} className="min-h-[54px]" />
      {loading && (
        <div className="flex items-center justify-center gap-2 text-sm text-[#6b6b6b] h-[54px]">
          <Loader2 className="h-4 w-4 animate-spin" />
          Preparing secure checkout...
        </div>
      )}
    </div>
  );
}
