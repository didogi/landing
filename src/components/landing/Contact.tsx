import type { ReactNode } from "react";
import { site } from "../../config/site";
import { copy } from "../../content/landing.fa.ts";
import { Reveal } from "./Reveal";

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-16 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 group-hover:border-primary group-hover:text-primary sm:size-[4.5rem]">
      {children}
    </span>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden="true">
      <path
        d="M20.5 4.5 3.8 11.1c-.7.3-.7 1.3.1 1.5l4.2 1.3 1.6 5.1c.2.7 1.1.9 1.6.3l2.4-2.6 4.5 3.3c.6.4 1.5.1 1.7-.6L21.4 5.4c.2-.8-.6-1.4-1.4-1.1l.5.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="m9.2 13.6 8.6-6.2-6.2 8.4-.4 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function BaleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" aria-hidden="true">
      <path
        d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v6a3.5 3.5 0 0 1-3.5 3.5H12l-4.2 3.2c-.7.5-1.8 0-1.8-.9V16A3.5 3.5 0 0 1 5 12.5v-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M8.5 9.5h7M8.5 13h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  bale: BaleIcon,
};

export function Contact() {
  return (
    <section id="contact" className="below-fold bg-[#05070c] px-5 pb-28 pt-16 sm:px-8 sm:pt-20 lg:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="section-label">{copy.contact.label}</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">{copy.contact.h2}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-white/70">{copy.contact.intro}</p>
        </Reveal>
        <div className="mt-12 flex items-start justify-center gap-8 sm:gap-14">
          {copy.contact.channels.map((channel) => {
            const href = site.social[channel.key];
            const external = href.startsWith("http");
            const Icon = ICONS[channel.key];
            return (
              <a
                key={channel.key}
                href={href || "#contact"}
                className="group flex w-20 flex-col items-center gap-3 sm:w-24"
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              >
                <IconWrap>
                  <Icon />
                </IconWrap>
                <span className="text-sm text-white/70 transition-colors group-hover:text-primary">{channel.name}</span>
              </a>
            );
          })}
        </div>
        <p className="mt-12 text-sm text-white/70">
          <a href={`mailto:${site.email}`} className="hover:text-primary">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
