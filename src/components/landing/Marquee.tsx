import { copy } from "../../content/landing.fa.ts";

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#05070c] py-5" aria-hidden="true">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 px-5">
        {copy.marquee.map((word) => (
          <span key={word} className="font-display text-base text-white/55">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
