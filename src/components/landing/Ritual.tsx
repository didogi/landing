import { Reveal } from "./Reveal";

const STEPS = [
  { t: "ثبت‌نام", d: "وارد شو؛ فروشنده یا خریدار، مسیر جداست." },
  { t: "فروشگاه", d: "محصول را اضافه کن و ویترین زنده‌ات را بساز." },
  { t: "معرفی زنده", d: "لایو بگذار، محصول را نشان بده، با مشتری حرف بزن." },
  { t: "فروش", d: "خرید آنی یا مزایده؛ سفارش همان جلسه ثبت می‌شود." },
];

export function Ritual() {
  return (
    <section id="how" className="bg-[#05070c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[13px] text-blue-300/80">چطور کار می‌کند</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">از ورود تا فروش زنده</h2>
        </Reveal>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.t} className="bg-[#0a0d14] p-8">
              <Reveal delay={i * 90}>
                <h3 className="font-display text-2xl font-semibold text-white">{step.t}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{step.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Ritual;
