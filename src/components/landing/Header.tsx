import { useEffect, useState } from "react";
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
        solid || open ? "bg-[#05070c]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="text-[15px] font-semibold tracking-[0.28em] text-white">
          DIDOGI
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="ناوبری">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href="#join" className="text-[13px] text-white/70 hover:text-white">
            ورود
          </a>
          <a
            href="#atelier"
            className="rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-white shadow-cta transition-colors hover:bg-primary-hover"
          >
            افتتاح آتلیه
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
                className="text-lg text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#atelier"
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            افتتاح آتلیه
          </a>
        </div>
      )}
    </header>
  );
}
