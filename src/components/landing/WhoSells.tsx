import { copy } from "../../content/landing.fa.ts";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function WhoSells() {
  return (
    <section id="who" className="below-fold bg-[#05070c] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[13px] text-blue-300/90">{copy.who.label}</p>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-white sm:text-4xl">
            {copy.who.h2}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">{copy.who.intro}</p>
        </Reveal>
        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {copy.who.items.map((item) => (
            <li key={item.t}>
              <Reveal>
                <article className="grid gap-2 py-8 sm:grid-cols-[minmax(10rem,16rem)_1fr] sm:items-start sm:gap-10">
                  <h3 className="font-display text-xl font-semibold text-white">{item.t}</h3>
                  <p className="text-sm leading-8 text-white/70">{item.d}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <CtaLink
            audience="seller"
            location="who"
            className="mt-10 inline-flex h-12 min-h-11 items-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default WhoSells;
