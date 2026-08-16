import { copy } from "../../content/landing.fa.ts";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="story" className="below-fold bg-[#05070c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[13px] text-blue-300/90">{copy.story.label}</p>
          <h2 className="font-display mt-6 text-3xl font-semibold leading-snug text-white sm:text-5xl">
            {copy.story.h2a}
            <span className="mt-3 block font-medium text-white/70">{copy.story.h2b}</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/70">{copy.story.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default Story;
