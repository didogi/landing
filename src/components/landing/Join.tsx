import { copy } from "../../content/landing.fa.ts";
import { CtaLink } from "./CtaLink";
import { Picture, LANDSCAPE_WIDTHS } from "./Picture";
import { Reveal } from "./Reveal";

export function Join() {
  return (
    <section id="join" className="below-fold bg-[#05070c] px-5 pb-28 pt-8 sm:px-8 lg:pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.8rem]">
          <Picture
            name="cta"
            alt=""
            widths={LANDSCAPE_WIDTHS}
            sizes="(min-width: 1152px) 1152px, 100vw"
            width={1800}
            height={900}
            className="h-[28rem] w-full object-cover sm:h-[32rem]"
          />
          <div className="absolute inset-0 bg-[#05070c]/72" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="font-display max-w-lg text-3xl font-semibold text-white sm:text-5xl">{copy.join.h2}</h2>
            <p className="mt-4 max-w-md text-sm leading-8 text-white/70">{copy.join.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink
                audience="buyer"
                location="join"
                className="btn-primary h-12 min-h-11 rounded-full px-7"
              />
              <CtaLink
                audience="seller"
                location="join"
                className="inline-flex h-12 min-h-11 items-center justify-center rounded-full border border-white/25 px-7 text-sm text-white hover:border-primary"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Join;
