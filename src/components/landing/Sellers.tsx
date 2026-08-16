import { Reveal } from "./Reveal";

const LINES = [
  { t: "فروش سریع‌تر", d: "معرفی زنده و گفت‌وگو، تصمیم خرید را همان جلسه می‌گیرد." },
  { t: "آمار و تسویه", d: "سفارش، تبدیل و واریز را از یک داشبورد می‌بینی." },
  { t: "مدیریت ساده", d: "محصول، لایو و پیام مشتری در یک پنل؛ بدون ابزار پراکنده." },
];

export function Sellers() {
  return (
    <section id="sellers" className="relative overflow-hidden bg-[#05070c] px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-blue-950/40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[13px] text-blue-300/80">فروشندگان</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-snug text-white sm:text-4xl">
            فروشگاهت را در مارکت‌پلیس باز کن
          </h2>
          <p className="mt-5 max-w-md text-sm leading-8 text-white/50">
            دیدوگی برای فروشنده‌هایی است که از ویترین خشک خسته‌اند. محصول را زنده معرفی کن، با خریدار حرف بزن، و در پلتفرم لایوکامرس ما بفروش.
          </p>
          <a
            href="#join"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
          >
            ثبت‌نام فروشنده
          </a>
        </Reveal>
        <div className="space-y-6">
          {LINES.map((line, i) => (
            <Reveal key={line.t} delay={i * 80}>
              <article className="border-t border-white/10 pt-6">
                <h3 className="font-display text-xl text-white">{line.t}</h3>
                <p className="mt-2 text-sm leading-7 text-white/45">{line.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
