/**
 * Sends a Meta Pixel event. The pixel snippet runs after hydration (see
 * components/MetaPixel.tsx), so an event fired on mount can run before
 * window.fbq exists; retry briefly instead of dropping it.
 */
export const trackMetaEvent = (
  eventName: string,
  parameters?: Record<string, unknown>,
  attempt = 0
) => {
  if (typeof window === 'undefined') return;
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  } else if (attempt < 20) {
    setTimeout(() => trackMetaEvent(eventName, parameters, attempt + 1), 250);
  }
};
