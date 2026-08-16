import { NAV } from "./nav";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="tracking-[0.35em] text-white">DIDOGI</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-white/40">سالن زنده پوشاک. لایو، مزایده، خرید آنی.</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="فوتر">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/45 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="space-y-2 text-sm text-white/40">
          <a href="mailto:hello@didogi.ir" className="block hover:text-white">
            hello@didogi.ir
          </a>
          <p>تهران</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-[11px] tracking-wide text-white/25">
        © {new Date().getFullYear()} دیدوگی
      </p>
    </footer>
  );
}
