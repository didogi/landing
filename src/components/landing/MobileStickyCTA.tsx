import { useEffect, useState } from "react";
import { CtaLink } from "./CtaLink";
import { useLandingUi } from "./LandingUi";

export function MobileStickyCTA() {
  const { menuOpen } = useLandingUi();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const join = document.getElementById("join");
    if (!join) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(join);
    return () => observer.disconnect();
  }, []);

  if (menuOpen || hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#05070c]/95 px-4 pt-3 lg:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl gap-2">
        <CtaLink
          audience="buyer"
          location="mobile_sticky"
          className="inline-flex h-11 min-h-11 flex-1 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
        />
        <CtaLink
          audience="seller"
          location="mobile_sticky"
          className="inline-flex h-11 min-h-11 flex-1 items-center justify-center rounded-full border border-white/20 text-sm text-white"
        />
      </div>
    </div>
  );
}
