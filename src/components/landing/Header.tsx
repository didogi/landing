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
        <a href="#top" className="font-display text-xl font-semibold text-white">
          دیدوجی
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
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#join" className="rounded-full px-4 py-2 text-[13px] text-white/80 hover:text-white">
            ورود به اپ
          </a>
          <a
            href="#sellers"
            className="rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-white shadow-cta transition-colors hover:bg-primary-hover"
          >
            ثبت‌نام فروشنده
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
              href="#join"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 text-sm text-white"
              onClick={() => setOpen(false)}
            >
              ورود به اپ
            </a>
            <a
              href="#sellers"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              ثبت‌نام فروشنده
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
