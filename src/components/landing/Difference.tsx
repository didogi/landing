import { copy } from "../../content/landing.fa.ts";
import { Reveal } from "./Reveal";

export function Difference() {
  return (
    <section id="difference" className="below-fold bg-[#05070c] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{copy.difference.label}</p>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold text-white sm:text-4xl">
            {copy.difference.h2}
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {copy.difference.items.map((item) => (
            <Reveal key={item.to}>
              <article className="grid gap-3 py-8 md:grid-cols-2 md:gap-12">
                <p className="text-sm leading-8 text-white/55">{item.from}</p>
                <p className="text-sm leading-8 text-white">{item.to}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Difference;
