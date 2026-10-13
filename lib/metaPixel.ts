export const trackMetaEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};
