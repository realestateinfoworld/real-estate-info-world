"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Sticky price + buy button for phones. Hidden while the purchase card
 * (#buy) is on screen, so it only appears once the visitor scrolls past it.
 */
export function MobileBuyBar({ price, label }: { price: number; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("buy");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "theme-dark fixed inset-x-0 bottom-0 z-[70] border-t border-line px-4 py-3 shadow-[0_-10px_30px_-10px_rgb(0_0_0_/_0.4)] transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-xs text-stone">{label}</div>
          <div className="stat-number font-display text-2xl text-ivory">${price.toLocaleString()}</div>
        </div>
        <a
          href="#buy"
          tabIndex={visible ? 0 : -1}
          className="flex h-11 items-center gap-2 rounded-full bg-gradient-to-b from-brand-from to-brand-to px-6 text-sm font-semibold text-on-brand"
        >
          Buy now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
