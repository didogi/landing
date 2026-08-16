import { Reveal } from "./Reveal";

const LINES = [
  { t: "تسویه آرام", d: "سهم فروشنده روشن است؛ واریز از داشبورد دیده می‌شود." },
  { t: "نبض فروش", d: "بیننده، پیشنهاد، تبدیل — برای شب بعد، نه برای حدس." },
  { t: "میز سبک", d: "موجودی، صحنه، پیام خریدار؛ یک پنل، بدون پراکندگی." },
];

export function Atelier() {
  return (
    <section id="atelier" className="relative overflow-hidden bg-[#05070c] px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-blue-950/40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] text-blue-300/80">آتلیه فروشنده</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-white sm:text-4xl">
            کسب‌وکار پوشاک، با ریتم شب
          </h2>
          <p className="mt-5 max-w-md text-sm leading-8 text-white/50">
            برای بوتیک و برند کوچک ایرانی که می‌خواهد موجودی را با حضور زنده خالی کند — نه با بنر همیشگی تخفیف.
          </p>
          <a
            href="#join"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
          >
            درخواست دعوت
          </a>
        </Reveal>
        <div className="space-y-6">
          {LINES.map((line, i) => (
            <Reveal key={line.t} delay={i * 80}>
              <article className="border-t border-white/10 pt-6">
                <h3 className="text-lg text-white">{line.t}</h3>
                <p className="mt-2 text-sm leading-7 text-white/45">{line.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
