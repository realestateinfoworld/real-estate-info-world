/**
 * Sends a GA4 event. The GA script loads after hydration (see
 * components/GoogleAnalytics.tsx), so an event fired on mount can run before
 * window.gtag exists; retry briefly instead of dropping it. Without GA (dev,
 * or no NEXT_PUBLIC_GA_ID) this quietly gives up.
 */
export function trackGaEvent(name: string, params?: Record<string, unknown>, attempt = 0) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else if (attempt < 20) {
    setTimeout(() => trackGaEvent(name, params, attempt + 1), 250);
  }
}
