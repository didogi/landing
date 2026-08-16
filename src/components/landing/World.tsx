import { copy } from "../../content/landing.fa.ts";
import { Picture, PORTRAIT_WIDTHS } from "./Picture";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    n: "۰۱",
    name: "feat-1",
    title: "معرفی زنده محصول",
    text: "جنس را نشان بده، سؤال را همان لحظه جواب بده. اعتماد از دیدن ساخته می‌شود، نه از کپشن.",
    alt: "معرفی زنده محصول مقابل دوربین",
  },
  {
    n: "۰۲",
    name: "feat-2",
    title: "ارتباط راحت با مشتری",
    text: "چت و گفت‌وگو؛ فروش از یک تراکنش خشک به مکالمه تبدیل می‌شود.",
    alt: "گفت‌وگوی فروشنده و مشتری",
  },
  {
    n: "۰۳",
    name: "feat-3",
    title: "خرید آنی و مزایده",
    text: "اگر آماده است همان لحظه می‌خرد. اگر رقابت است، مزایده زنده قیمت را شفاف می‌سازد.",
    alt: "لحظه تصمیم خرید",
  },
  {
    n: "۰۴",
    name: "feat-4",
    title: "مارکت‌پلیس هوشمند",
    text: "فروشگاه‌ها در یک پلتفرم جمع‌اند. کشف، گفت‌وگو و خرید در یک جریان.",
    alt: "فضای کشف محصول در مارکت‌پلیس",
  },
];

export function World() {
  return (
    <section id="world" className="below-fold bg-[#05070c] pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[13px] text-blue-300/90">{copy.world.label}</p>
          <h2 className="font-display mt-4 max-w-lg text-3xl font-semibold text-white sm:text-4xl">
            {copy.world.h2}
          </h2>
        </Reveal>
        <div className="mt-14 space-y-20 sm:space-y-28">
          {ITEMS.map((item, i) => (
            <article key={item.n} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="overflow-hidden rounded-[1.4rem]">
                  <Picture
                    name={item.name}
                    alt={item.alt}
                    widths={PORTRAIT_WIDTHS}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    width={1100}
                    height={1375}
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-sm text-white/55">{item.n}</p>
                <h3 className="font-display mt-4 text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                <p className="mt-6 max-w-sm text-sm leading-8 text-white/70">{item.text}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default World;
