import { useEffect, useId, useRef, useState } from "react";
import { copy } from "../../content/landing.fa.ts";
import { CtaLink } from "./CtaLink";
import { useLandingUi } from "./LandingUi";

export function Header() {
  const { menuOpen, setMenuOpen } = useLandingUi();
  const [solid, setSolid] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const panel = panelRef.current;
    const trigger = buttonRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>("a, button");
    focusables?.[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        trigger?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusables?.length) return;
      const list = [...focusables];
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || menuOpen ? "bg-[#05070c]/90 md:bg-[#05070c]/80 md:backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="font-display text-xl font-semibold text-white lg:text-2xl">
          دیدوجی
        </a>
        <nav className="hidden items-center gap-10 lg:flex" aria-label="ناوبری اصلی">
          {copy.nav.map((item) => (
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
          <CtaLink audience="buyer" location="header" className="min-h-11 rounded-full px-4 py-2 text-base text-white/80 hover:text-white" />
          <CtaLink
            audience="seller"
            location="header"
            className="min-h-11 rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-white shadow-cta hover:bg-primary-hover"
          />
        </div>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? "بستن منو" : "باز کردن منو"}</span>
          <span className="mx-auto block h-px w-6 bg-white" />
          <span className="mx-auto mt-2 block h-px w-6 bg-white" />
        </button>
      </div>
      {menuOpen && (
        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="منوی موبایل"
          className="border-t border-white/10 px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="ناوبری موبایل">
            {copy.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center font-display text-xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-2">
            <CtaLink
              audience="buyer"
              location="header"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 text-sm text-white"
              onClick={() => setMenuOpen(false)}
            />
            <CtaLink
              audience="seller"
              location="header"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
