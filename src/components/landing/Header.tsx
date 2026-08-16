import { useEffect, useState } from "react";
import { CTA_BUYER, CTA_SELLER, HREF_BUYER, HREF_SELLER } from "./cta";
import { NAV } from "./nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open
          ? "bg-[#05070c]/90 md:bg-[#05070c]/80 md:backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="font-display text-xl font-semibold text-white lg:text-2xl">
          دیدوجی
        </a>
        <nav className="hidden items-center gap-10 lg:flex" aria-label="ناوبری">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={HREF_BUYER} className="rounded-full px-4 py-2 text-base text-white/80 hover:text-white">
            {CTA_BUYER}
          </a>
          <a
            href={HREF_SELLER}
            className="rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-white shadow-cta transition-colors hover:bg-primary-hover"
          >
            {CTA_SELLER}
          </a>
        </div>
        <button
          type="button"
          className="size-10 text-white lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">منو</span>
          <span className="mx-auto block h-px w-6 bg-white" />
          <span className="mx-auto mt-2 block h-px w-6 bg-white" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-xl text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-2">
            <a
              href={HREF_BUYER}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 text-sm text-white"
              onClick={() => setOpen(false)}
            >
              {CTA_BUYER}
            </a>
            <a
              href={HREF_SELLER}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {CTA_SELLER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
