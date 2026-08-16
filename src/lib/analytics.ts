type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

const measurementId = String(import.meta.env.VITE_MEASUREMENT_ID ?? "");
const allowDev = import.meta.env.VITE_ANALYTICS_DEV === "true";
const enabled = Boolean(measurementId) && (import.meta.env.PROD || allowDev);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: AnalyticsPayload }) => void;
  }
}

export function track(event: string, payload: AnalyticsPayload = {}): void {
  if (!enabled) return;
  try {
    window.gtag?.("event", event, payload);
    window.plausible?.(event, { props: payload });
  } catch {
    /* analytics must never break the page */
  }
}

export function initScrollDepth(): () => void {
  if (!enabled || typeof window === "undefined") return () => {};

  const fired = new Set<number>();
  const marks = [25, 50, 75, 100];
  let ticking = false;

  const measure = () => {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = Math.round((window.scrollY / max) * 100);
    for (const mark of marks) {
      if (pct >= mark && !fired.has(mark)) {
        fired.add(mark);
        track("scroll_depth", { percent: mark });
      }
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(measure);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
