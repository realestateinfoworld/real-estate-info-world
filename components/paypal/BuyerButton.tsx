"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackMetaEvent } from "@/lib/metaPixel";
import { PRODUCTS } from "@/lib/constants";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_SDK = "https://www.paypal.com/sdk/js?client-id=BAAfvCV7fZEPJ7_q8Vg4AkKdUjnEaHb_RiWFhfqwfTDx1piR_Hdo2BTaRbNOxI8tCBymk1GivPUO3IYme8&components=hosted-buttons&disable-funding=venmo&currency=USD";
const BUTTON_ID = "MBUBJ6QVQ2HHN";

export function BuyerButton() {
  const product = PRODUCTS.buyerLeads;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
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

    const renderButton = () => {
      const container = document.getElementById("paypal-buyer-btn");
      if (!container || !window.paypal) return;

      container.innerHTML = "";

      window.paypal
        .HostedButtons({ hostedButtonId: BUTTON_ID })
        .render("#paypal-buyer-btn")
        .then(() => {
          setLoading(false);
          // Track Purchase for Buyer Leads
          trackMetaEvent('Purchase', {
            value: product.price,
            currency: 'USD',
            content_name: product.name,
          });
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    };

    const t = setTimeout(loadScript, 100);
    return () => clearTimeout(t);
  }, []);

  if (error) {
    return (
      <a
        href={`https://www.paypal.com/ncp/payment/${BUTTON_ID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="accent" className="w-full">Buy Buyer Leads — $1,200 USD</Button>
      </a>
    );
  }

  return (
    <div className="paypal-wrapper">
      <div id="paypal-buyer-btn" className="min-h-[54px]" />
      {loading && (
        <div className="flex items-center justify-center gap-2 text-sm text-[#6b6b6b] h-[54px]">
          <Loader2 className="h-4 w-4 animate-spin" />
          Preparing secure checkout...
        </div>
      )}
    </div>
  );
}
