import { useEffect, useState } from "react";
import { initScrollDepth } from "../../lib/analytics";
import { AudienceHow } from "./AudienceHow";
import { Contact } from "./Contact";
import { Difference } from "./Difference";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Join } from "./Join";
import { JsonLd } from "./JsonLd";
import { LandingUiContext } from "./LandingUi";
import { Marquee } from "./Marquee";
import { MobileStickyCTA } from "./MobileStickyCTA";
import { ProductProof } from "./ProductProof";
import { Sellers } from "./Sellers";
import { Story } from "./Story";
import { Trust } from "./Trust";
import { WhoSells } from "./WhoSells";
import { World } from "./World";

export function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => initScrollDepth(), []);

  return (
    <LandingUiContext.Provider value={{ menuOpen, setMenuOpen }}>
      <div className="bg-[#05070c] text-white">
        <JsonLd />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        >
          پرش به محتوا
        </a>
        <Header />
        <main id="content">
          <Hero />
          <Marquee />
          <Story />
          <Difference />
          <World />
          <ProductProof />
          <AudienceHow />
          <WhoSells />
          <Sellers />
          <Trust />
          <FAQ />
          <Join />
          <Contact />
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </LandingUiContext.Provider>
  );
}
