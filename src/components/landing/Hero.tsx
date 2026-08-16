const FRAMES = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&h=1200&q=80",
    alt: "فروشنده در حال معرفی محصول برای مشتری",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=720&h=960&q=80",
    alt: "خرید حضوری و گفت‌وگو با مشتری",
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=720&h=960&q=80",
    alt: "فروشگاه پوشاک و قفسه محصولات",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 size-[28rem] rounded-full bg-blue-600/25 blur-3xl lux-glow" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-[22rem] rounded-full bg-violet-600/20 blur-3xl lux-glow" />

      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-3 gap-1 opacity-80 sm:gap-2">
          {FRAMES.map((frame, i) => (
            <div key={frame.src} className="relative overflow-hidden">
              <img
                src={frame.src}
                alt={frame.alt}
                width={900}
                height={1200}
                className={`absolute inset-0 size-full object-cover lux-kenburns ${i === 1 ? "lux-film" : ""}`}
                style={{ animationDelay: `${i * -6}s` }}
                fetchPriority={i === 0 ? "high" : "low"}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-[#05070c]/60 to-[#05070c]/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <div className="flex items-center gap-4">
          <span className="relative flex size-14 items-center justify-center">
            <svg className="lux-ring absolute inset-0 text-white/35" viewBox="0 0 64 64" fill="none" aria-hidden="true">
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
        <p className="lux-rise mt-6 max-w-lg text-sm leading-8 text-white/65 sm:text-base" style={{ animationDelay: "120ms" }}>
          دیدوجی استارتاپ لایوکامرس است؛ مارکت‌پلیسی برای فروش هوشمند کالا. محصول را زنده معرفی کن، راحت با مشتری حرف بزن، بفروش یا مزایده برگزار کن — نه با ویترین ساکت و دکمهٔ خرید تنها.
        </p>
        <div className="lux-rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "220ms" }}>
          <a
            href="#join"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta transition-transform hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            ورود به اپ
          </a>
          <a
            href="#sellers"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm text-white/90 transition-colors hover:border-white/50"
          >
            ثبت‌نام فروشنده
          </a>
        </div>
      </div>
    </section>
  );
}
