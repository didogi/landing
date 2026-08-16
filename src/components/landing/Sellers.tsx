import { copy } from "../../content/landing.fa.ts";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function Sellers() {
  return (
    <section id="sellers" className="below-fold relative overflow-hidden bg-[#05070c] px-5 py-24 sm:px-8">
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[13px] text-blue-300/90">{copy.sellers.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-snug text-white sm:text-4xl">
            {copy.sellers.h2}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-8 text-white/70">{copy.sellers.body}</p>
          <CtaLink
            audience="seller"
            location="sellers"
            className="mt-8 inline-flex h-12 min-h-11 items-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
          />
          <p className="mt-10 text-xs text-white/55">{copy.sellers.casesLabel}</p>
          <p className="mt-1 text-xs text-white/45">{copy.sellers.casesNote}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {copy.sellers.cases.map((item) => (
              <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="space-y-6">
          {copy.sellers.lines.map((line) => (
            <Reveal key={line.t}>
              <article className="border-t border-white/10 pt-6">
                <h3 className="font-display text-xl text-white">{line.t}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{line.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sellers;
