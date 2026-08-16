import { copy } from "../../content/landing.fa.ts";
import { Reveal } from "./Reveal";

/** TODO: replace this editorial flow with real product media when screenshots or session footage exist. */
export function ProductProof() {
  return (
    <section id="proof" className="below-fold bg-[#05070c] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">{copy.proof.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.proof.h2}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {copy.proof.steps.map((step) => (
            <li key={step.t} className="bg-[#0a0d14] p-8">
              <h3 className="font-display text-xl font-semibold text-white">{step.t}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{step.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProductProof;
