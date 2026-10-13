"use client";

import { useEffect } from "react";
import { trackGaEvent } from "@/lib/gtag";

/** Fires one GA4 event when mounted, e.g. view_item on a product page. */
export function GaEvent({ name, params }: { name: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    trackGaEvent(name, params);
    // Fire once per page view; params are static per page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return null;
}
