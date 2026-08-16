import { Picture, PORTRAIT_WIDTHS } from "./Picture";
import { CTA_BUYER, CTA_SELLER, HREF_BUYER, HREF_SELLER } from "./cta";
import { playClass, useInViewPlay } from "../../hooks/useInViewPlay";

const FRAMES = [
  {
    name: "hero-1",
    alt: "فروشنده در حال معرفی محصول برای مشتری",
    priority: true,
  },
  {
    name: "hero-2",
    alt: "خرید حضوری و گفت‌وگو با مشتری",
    priority: false,
  },
  {
    name: "hero-3",
    alt: "فروشگاه پوشاک و قفسه محصولات",
    priority: false,
  },
];

export function Hero() {
  const { ref, playing } = useInViewPlay<HTMLElement>();
  const on = playClass(playing);

  return (
    <section id="top" ref={ref} className="crit-hero relative min-h-[100svh] overflow-hidden">
      <div className={`pointer-events-none absolute -left-24 top-10 size-[28rem] rounded-full bg-blue-600/25 blur-3xl lux-glow ${on}`} />
      <div className={`pointer-events-none absolute -right-16 bottom-10 size-[22rem] rounded-full bg-violet-600/20 blur-3xl lux-glow ${on}`} />

      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-3 gap-1 opacity-80 sm:gap-2">
          {FRAMES.map((frame, i) => (
            <div key={frame.name} className="relative overflow-hidden">
              <Picture
                name={frame.name}
                alt={frame.alt}
                widths={PORTRAIT_WIDTHS}
                sizes="33vw"
                width={1100}
                height={1467}
                priority={frame.priority}
                eager={!frame.priority}
                pictureClassName="absolute inset-0 block size-full"
                className={`absolute inset-0 size-full object-cover lux-kenburns ${i === 1 ? "lux-film" : ""} ${on}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/60 to-[#05070c]/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <div className="flex items-center gap-4">
          <span className="relative flex size-14 items-center justify-center">
            <svg className={`lux-ring absolute inset-0 text-white/35 ${on}`} viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 10" />
            </svg>
            <span className="text-[10px] tracking-[0.3em] text-cyan-300">LIVE</span>
          </span>
          <span className="h-px w-10 bg-white/30 lux-line" />
          <p className="text-[12px] text-white/55">مارکت‌پلیس هوشمند · لایوکامرس</p>
        </div>

        <h1 className="lux-rise font-display mt-8 max-w-3xl text-[2.5rem] font-semibold leading-[1.25] text-white sm:text-6xl lg:text-7xl">
          خشکی فروش را
          <span className="mt-2 block font-medium text-white/70">از بین می‌بریم</span>
        </h1>
        <div className="lux-rise mt-6 max-w-lg space-y-2 text-sm leading-8 text-white/60 sm:text-base" style={{ animationDelay: "120ms" }}>
          <p>دیدوجی استارتاپ لایوکامرس است؛ مارکت‌پلیسی برای فروش هوشمند کالا.</p>
          <p>
            محصول را{" "}
            <strong className="font-semibold text-white">زنده معرفی کن</strong>، راحت{" "}
            <strong className="font-semibold text-white">با مشتری حرف بزن</strong>، بفروش یا{" "}
            <strong className="font-semibold text-white">مزایده برگزار کن</strong>.
          </p>
          <p>نه با ویترین ساکت و دکمهٔ خرید تنها.</p>
        </div>
        <div className="lux-rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "220ms" }}>
          <a
            href={HREF_BUYER}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta transition-transform hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            {CTA_BUYER}
          </a>
          <a
            href={HREF_SELLER}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm text-white/90 transition-colors hover:border-white/50"
          >
            {CTA_SELLER}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
