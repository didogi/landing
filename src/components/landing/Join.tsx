import { Picture, LANDSCAPE_WIDTHS } from "./Picture";
import { Reveal } from "./Reveal";
import { CTA_BUYER, CTA_SELLER, HREF_BUYER, HREF_SELLER } from "./cta";

export function Join() {
  return (
    <section id="join" className="bg-[#05070c] px-5 pb-24 pt-8 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.8rem]">
          <Picture
            name="cta"
            alt="فضای فروش و تعامل با مشتری"
            widths={LANDSCAPE_WIDTHS}
            sizes="(min-width: 1152px) 1152px, 100vw"
            width={1800}
            height={900}
            className="h-[28rem] w-full object-cover sm:h-[32rem]"
          />
          <div className="absolute inset-0 bg-[#05070c]/72" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="font-display max-w-lg text-3xl font-semibold text-white sm:text-5xl">از همین‌جا شروع کن</h2>
            <p className="mt-4 max-w-md text-sm leading-8 text-white/60">
              لایوها را ببین و وارد شو، یا فروشگاهت را باز کن و فروش هوشمند را شروع کن.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={HREF_BUYER}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
              >
                {CTA_BUYER}
              </a>
              <a
                href={HREF_SELLER}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm text-white hover:border-white/60"
              >
                {CTA_SELLER}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Join;
