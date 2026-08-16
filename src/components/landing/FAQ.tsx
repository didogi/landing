import { useId, useState } from "react";
import { copy } from "../../content/landing.fa.ts";
import { track } from "../../lib/analytics";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section id="faq" className="below-fold bg-[#05070c] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] text-blue-300/90">{copy.faq.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.faq.h2}</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {copy.faq.items.map((item, index) => {
            const isOpen = open === index;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div key={item.q} className="py-2">
                <h3>
                  <button
                    type="button"
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 py-3 text-start text-base font-medium text-white"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      const next = isOpen ? null : index;
                      setOpen(next);
                      if (next !== null) track("faq_open", { index: next });
                    }}
                  >
                    {item.q}
                    <span className={`inline-block text-white/50 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden>
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  className={`faq-panel ${isOpen ? "is-open" : ""}`}
                >
                  <div>
                    <p className="pb-3 text-sm leading-8 text-white/70">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
