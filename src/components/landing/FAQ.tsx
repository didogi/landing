import { copy } from "../../content/landing.fa.ts";
import { track } from "../../lib/analytics";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section id="faq" className="below-fold bg-[#05070c] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] text-blue-300/90">{copy.faq.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.faq.h2}</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {copy.faq.items.map((item, index) => (
            <details
              key={item.q}
              className="group py-5"
              onToggle={(event) => {
                if (event.currentTarget.open) track("faq_open", { index });
              }}
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-start text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                {item.q}
                <span className="text-white/50 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-white/50 group-open:inline" aria-hidden>
                  −
                </span>
              </summary>
              <p className="mt-3 text-sm leading-8 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
