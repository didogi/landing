import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="story" className="bg-[#05070c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[13px] text-blue-300/80">چرا دیدوجی</p>
          <h2 className="font-display mt-6 text-3xl font-semibold leading-snug text-white sm:text-5xl">
            فروش آنلاین، خشک شده.
            <span className="mt-3 block font-medium text-white/55">ما مدل زنده می‌سازیم.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/50">
            عکس، قیمت، دکمه. مشتری تنها می‌ماند و فروشنده پشت ویترین منتظر. دیدوجی این فاصله را پر می‌کند: معرفی زنده محصول، چت و تعامل همان لحظه، و فروش در فضایی که حس بازار واقعی را دارد — با هوشمندی یک مارکت‌پلیس.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Story;
