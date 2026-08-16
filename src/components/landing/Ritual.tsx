import { Reveal } from "./Reveal";

const STEPS = [
  { t: "آتلیه", d: "هویت فروشگاه را بنا کن." },
  { t: "کمد", d: "قطعات را با موجودی و سایز بنشان." },
  { t: "صحنه", d: "شب را روشن کن و لایو را آغاز کن." },
  { t: "فروش", d: "مزایده یا خرید آنی؛ همان لحظه." },
];

export function Ritual() {
  return (
    <section id="ritual" className="bg-[#05070c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] text-blue-300/80">آیین فروش</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">چهار نفس تا افتتاح</h2>
        </Reveal>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.t} className="bg-[#0a0d14] p-8">
              <Reveal delay={i * 90}>
                <p className="text-[11px] text-white/30">{["۰۱", "۰۲", "۰۳", "۰۴"][i]}</p>
                <h3 className="mt-8 text-2xl font-semibold text-white">{step.t}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{step.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
