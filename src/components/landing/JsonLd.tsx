import { useEffect } from "react";
import { site } from "../../config/site";
import { copy } from "../../content/landing.fa.ts";

export function JsonLd() {
  useEffect(() => {
    if (!site.url) return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = site.url;
    const og = document.createElement("meta");
    og.setAttribute("property", "og:url");
    og.content = site.url;
    document.head.querySelector('meta[property="og:url"]')?.remove();
    document.head.appendChild(og);
  }, []);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    email: site.email,
    ...(site.url ? { url: site.url } : {}),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    inLanguage: "fa-IR",
    ...(site.url ? { url: site.url } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
