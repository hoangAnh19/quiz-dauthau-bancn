export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return;
  const gtag = (window as Window & { gtag?: (command: string, eventName: string, eventParams?: Record<string, unknown>) => void }).gtag;
  gtag?.('event', name, params);
}
