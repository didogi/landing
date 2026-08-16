const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function withUtm(href: string): string {
  if (!href.startsWith("http") || typeof window === "undefined") return href;

  try {
    const next = new URL(href);
    const current = new URL(window.location.href);
    for (const key of UTM_KEYS) {
      const value = current.searchParams.get(key);
      if (value && !next.searchParams.has(key)) {
        next.searchParams.set(key, value);
      }
    }
    return next.toString();
  } catch {
    return href;
  }
}
