import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";

const Marquee = lazy(() => import("./Marquee"));
const Story = lazy(() => import("./Story"));
const Stats = lazy(() => import("./Stats"));
const World = lazy(() => import("./World"));
const Ritual = lazy(() => import("./Ritual"));
const Sellers = lazy(() => import("./Sellers"));
const Trust = lazy(() => import("./Trust"));
const Join = lazy(() => import("./Join"));
const Footer = lazy(() => import("./Footer"));

function Slot({ minHeight }: { minHeight: number }) {
  return <div className="bg-[#05070c]" style={{ minHeight }} aria-hidden="true" />;
}

export function Landing() {
  return (
    <div className="bg-[#05070c] text-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Slot minHeight={64} />}>
          <Marquee />
        </Suspense>
        <Suspense fallback={<Slot minHeight={420} />}>
          <Story />
        </Suspense>
        <Suspense fallback={<Slot minHeight={180} />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<Slot minHeight={720} />}>
          <World />
        </Suspense>
        <Suspense fallback={<Slot minHeight={420} />}>
          <Ritual />
        </Suspense>
        <Suspense fallback={<Slot minHeight={480} />}>
          <Sellers />
        </Suspense>
        <Suspense fallback={<Slot minHeight={280} />}>
          <Trust />
        </Suspense>
        <Suspense fallback={<Slot minHeight={460} />}>
          <Join />
        </Suspense>
      </main>
      <Suspense fallback={<Slot minHeight={240} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
