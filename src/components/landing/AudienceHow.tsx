import { useId, useState, type KeyboardEvent } from "react";
import { copy } from "../../content/landing.fa.ts";
import { track } from "../../lib/analytics";
import { Reveal } from "./Reveal";

type Audience = "buyer" | "seller";

export function AudienceHow() {
  const [audience, setAudience] = useState<Audience>("buyer");
  const buyerId = useId();
  const sellerId = useId();
  const steps = audience === "buyer" ? copy.how.buyerSteps : copy.how.sellerSteps;

  const select = (next: Audience) => {
    setAudience(next);
    track("audience_tab_change", { audience: next });
  };

  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const order: Audience[] = ["buyer", "seller"];
    const index = order.indexOf(audience);
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const dir = event.key === "ArrowLeft" ? 1 : -1;
      select(order[(index + dir + order.length) % order.length]);
    }
    if (event.key === "Home") {
      event.preventDefault();
      select("buyer");
    }
    if (event.key === "End") {
      event.preventDefault();
      select("seller");
    }
  };

  return (
    <section id="how" className="below-fold bg-[#05070c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{copy.how.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.how.h2}</h2>
        </Reveal>
        <div
          role="tablist"
          aria-label="مسیر خریدار یا فروشنده"
          className="mt-10 inline-flex rounded-full border border-white/15 p-1"
          onKeyDown={onKey}
        >
          {(
            [
              { id: buyerId, value: "buyer" as const, label: copy.how.buyer },
              { id: sellerId, value: "seller" as const, label: copy.how.seller },
            ]
          ).map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              id={`${tab.id}-tab`}
              aria-selected={audience === tab.value}
              aria-controls={`${tab.id}-panel`}
              tabIndex={audience === tab.value ? 0 : -1}
              className={`min-h-11 rounded-full px-5 text-sm ${
                audience === tab.value ? "bg-primary text-primary-foreground" : "text-white/70 hover:text-white"
              }`}
              onClick={() => select(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`${audience === "buyer" ? buyerId : sellerId}-panel`}
          aria-labelledby={`${audience === "buyer" ? buyerId : sellerId}-tab`}
        >
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.t} className="bg-[#0a0d14] p-8">
                <h3 className="font-display text-2xl font-semibold text-white">{step.t}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default AudienceHow;
