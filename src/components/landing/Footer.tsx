import { site } from "../../config/site";
import { copy } from "../../content/landing.fa.ts";
import { CtaLink } from "./CtaLink";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-xl text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-white/70">{copy.footer.blurb}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="فوتر">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#who" className="text-sm text-white/70 hover:text-white">
            چه کسانی می‌فروشند
          </a>
          <a href="#faq" className="text-sm text-white/70 hover:text-white">
            پرسش‌ها
          </a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">
            ارتباط با ما
          </a>
          <CtaLink audience="buyer" location="footer" className="text-sm text-white/70 hover:text-white" />
        </nav>
        <div className="space-y-2 text-sm text-white/70">
          <a href={`mailto:${site.email}`} className="block hover:text-white">
            {site.email}
          </a>
          <p>{site.city}</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-[11px] text-white/55">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}

export default Footer;
