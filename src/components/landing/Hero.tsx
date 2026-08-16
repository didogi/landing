import { copy } from "../../content/landing.fa.ts";
import { playClass, useInViewPlay } from "../../hooks/useInViewPlay";
import { CtaLink } from "./CtaLink";
import { Picture, PORTRAIT_WIDTHS } from "./Picture";

const FRAMES = [
  { name: "hero-1", alt: "فروشنده در حال معرفی زنده محصول", priority: true },
  { name: "hero-2", alt: "" },
  { name: "hero-3", alt: "" },
];

export function Hero() {
  const { ref, playing } = useInViewPlay<HTMLElement>();
  const on = playClass(playing);

  return (
    <section id="top" ref={ref} className="crit-hero relative min-h-[100svh] overflow-hidden">
      <div className={`pointer-events-none absolute -left-24 top-10 size-[22rem] rounded-full bg-blue-600/20 blur-3xl lux-glow ${on}`} />

      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-1 md:grid-cols-3 md:gap-2">
          {FRAMES.map((frame, i) => (
            <div key={frame.name} className={`relative overflow-hidden ${i > 0 ? "hidden md:block" : ""}`}>
              <Picture
                name={frame.name}
                alt={frame.alt}
                widths={PORTRAIT_WIDTHS}
                sizes={i === 0 ? "(min-width: 768px) 33vw, 100vw" : "33vw"}
                width={1100}
                height={1467}
                priority={Boolean(frame.priority)}
                pictureClassName="absolute inset-0 block size-full"
                className={`absolute inset-0 size-full object-cover ${i === 0 ? `lux-kenburns ${on}` : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/65 to-[#05070c]/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 sm:pb-24">
        <p className="text-[12px] text-white/55">{copy.hero.kicker}</p>
        <h1 className="lux-rise font-display mt-6 max-w-3xl text-[2.5rem] font-semibold leading-[1.25] text-white sm:text-6xl lg:text-7xl">
          {copy.hero.h1a}
          <span className="mt-2 block font-medium text-white/80">{copy.hero.h1b}</span>
        </h1>
        <p className="lux-rise mt-6 max-w-xl text-sm leading-8 text-white/70 sm:text-base" style={{ animationDelay: "120ms" }}>
          دیدوجی یک مارکت‌پلیس لایوکامرس است؛ جایی که فروشنده محصول را{" "}
          <strong className="font-semibold text-white">زنده معرفی</strong> می‌کند، مشتری همان لحظه سؤال می‌پرسد و{" "}
          <strong className="font-semibold text-white">خرید یا مزایده</strong> در همان فضا انجام می‌شود.
        </p>
        <div className="lux-rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "180ms" }}>
          <CtaLink
            audience="buyer"
            location="hero"
            className="inline-flex h-12 min-h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
          />
          <CtaLink
            audience="seller"
            location="hero"
            className="inline-flex h-12 min-h-11 items-center justify-center rounded-full border border-white/20 px-7 text-sm text-white hover:border-white/50"
          />
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="مزیت‌های اصلی">
          {copy.hero.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
