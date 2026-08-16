import { Atelier } from "./Atelier";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Join } from "./Join";
import { Marquee } from "./Marquee";
import { Ritual } from "./Ritual";
import { Story } from "./Story";
import { Trust } from "./Trust";
import { World } from "./World";

export function Landing() {
  return (
    <div className="bg-[#05070c] text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <World />
        <Ritual />
        <Atelier />
        <Trust />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
