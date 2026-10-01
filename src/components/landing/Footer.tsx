import { site } from "../../config/site";
import { copy } from "../../content/landing.fa.ts";
import { CtaLink } from "./CtaLink";

const LEGAL_LINKS = [
  { path: "/about", label: "درباره ما" },
  { path: "/terms", label: "قوانین و مقررات" },
  { path: "/privacy", label: "حریم خصوصی" },
  { path: "/contact", label: "تماس با ما" },
] as const;

const enamadQuery =
  site.enamad.id && site.enamad.code
    ? `id=${encodeURIComponent(site.enamad.id)}&Code=${encodeURIComponent(site.enamad.code)}`
    : "";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <img src={`${import.meta.env.BASE_URL}brand/logo-full-dark.png`} alt={site.name} className="h-9 w-auto" loading="lazy" />
          <p className="mt-3 max-w-xs text-sm leading-7 text-white/70">{copy.footer.blurb}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="فوتر">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-primary">
              {item.label}
            </a>
          ))}
          <a href="#who" className="text-sm text-white/70 hover:text-primary">
            چه کسانی می‌فروشند
          </a>
          <a href="#faq" className="text-sm text-white/70 hover:text-primary">
            پرسش‌ها
          </a>
          <a href="#contact" className="text-sm text-white/70 hover:text-primary">
            ارتباط با ما
          </a>
          <CtaLink audience="buyer" location="footer" className="text-sm text-white/70 hover:text-primary" />
        </nav>
        <div className="space-y-2 text-sm text-white/70">
          {site.phone ? (
            <a href={`tel:${site.phone}`} className="block hover:text-primary" dir="ltr">
              {site.phone}
            </a>
          ) : null}
          <a href={`mailto:${site.email}`} className="block hover:text-primary">
            {site.email}
          </a>
          <p className="max-w-xs leading-7">{site.address || site.city}</p>
          {enamadQuery ? (
            <a
              referrerPolicy="origin"
              target="_blank"
              rel="noopener"
              href={`https://trustseal.enamad.ir/?${enamadQuery}`}
              className="inline-block pt-2"
            >
              <img
                referrerPolicy="origin"
                src={`https://trustseal.enamad.ir/logo.aspx?${enamadQuery}`}
                alt="نماد اعتماد الکترونیکی"
                className="h-20 w-auto rounded-md bg-white p-1"
                loading="lazy"
              />
            </a>
          ) : null}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 text-[12px] text-white/55">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="قوانین">
          {LEGAL_LINKS.map((link) => (
            <a key={link.path} href={`${site.appUrl}${link.path}`} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
