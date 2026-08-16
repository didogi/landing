import { Reveal } from "./Reveal";

const STATS = [
  { value: "۲", label: "مسیر ورود", hint: "خریدار و فروشنده" },
  { value: "۴", label: "قابلیت اصلی", hint: "لایو، گفت‌وگو، خرید، مزایده" },
  { value: "۱", label: "مارکت‌پلیس", hint: "فروش هوشمند در یک جریان" },
];

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#05070c] px-5 py-10 sm:px-8 sm:py-12" aria-label="شاخص‌های پلتفرم">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3 sm:gap-6">
        {STATS.map((item, i) => (
          <Reveal key={item.label} delay={i * 70}>
            <div className="text-center sm:text-start">
              <p className="font-display text-4xl font-semibold text-white sm:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-white/80">{item.label}</p>
              <p className="mt-1 text-xs leading-6 text-white/45">{item.hint}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Stats;
