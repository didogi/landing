const WORDS = ["لایو", "مزایده", "آتلیه", "پوشاک", "شب فروش", "خرید آنی"];

export function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#05070c] py-5" aria-hidden="true">
      <div className="lux-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10 text-sm tracking-[0.35em] text-white/35">
            {word}
            <span className="size-1 rounded-full bg-cyan-400/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
