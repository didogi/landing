import { copy } from "../../content/landing.fa.ts";
import { Reveal } from "./Reveal";

export function Trust() {
  return (
    <section id="trust" className="below-fold bg-[#05070c] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{copy.trust.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.trust.h2}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">{copy.trust.intro}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.trust.items.map((item) => (
            <Reveal key={item.t}>
              <article className="h-full rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg text-white">{item.t}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
