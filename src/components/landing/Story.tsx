import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="story" className="bg-[#05070c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] text-blue-300/80">روایت</p>
          <h2 className="mt-6 text-3xl font-semibold leading-snug tracking-tight text-white sm:text-5xl">
            ویترین خاموش است.
            <span className="mt-3 block font-normal text-white/55">فروش وقتی جان می‌گیرد که نگاه‌ها همزمان باشند.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/50">
            فروشگاه آنلاین معمولی عکس می‌گذارد و منتظر می‌ماند. در دیدوگی، فروشنده روی صحنه است؛ خریدار پارچه را می‌بیند، نفس می‌کشد، پیشنهاد می‌دهد. سرعت، اعتماد و هیجان مزایده در یک شب جمع می‌شوند.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
