import type { MouseEvent, ReactNode } from "react";
import { site, type CtaAudience, type CtaLocation } from "../../config/site";
import { track } from "../../lib/analytics";
import { withUtm } from "../../lib/utm";

type CtaLinkProps = {
  audience: CtaAudience;
  location: CtaLocation;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

export function CtaLink({ audience, location, className, onClick, children }: CtaLinkProps) {
  const cta = site.cta[audience];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    track("cta_click", { audience, location });
    onClick?.();
    if (cta.href.startsWith("#")) return;
    event.currentTarget.href = withUtm(cta.href);
  };

  return (
    <a href={cta.href} className={className} onClick={handleClick}>
      {children ?? cta.label}
    </a>
  );
}
