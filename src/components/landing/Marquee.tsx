import { playClass, useInViewPlay } from "../../hooks/useInViewPlay";

const WORDS = ["لایوکامرس", "معرفی زنده", "گفت‌وگو با مشتری", "مارکت‌پلیس", "خرید آنی", "مزایده زنده"];

export function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  const { ref, playing } = useInViewPlay<HTMLDivElement>();

  return (
    <div ref={ref} className="overflow-hidden border-y border-white/10 bg-[#05070c] py-5" aria-hidden="true">
      <div className={`lux-marquee flex w-max gap-10 whitespace-nowrap ${playClass(playing)}`}>
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10 font-display text-base text-white/40">
            {word}
            <span className="size-1 rounded-full bg-cyan-400/80" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
