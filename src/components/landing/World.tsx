import { Reveal } from "./Reveal";

const ITEMS = [
  {
    n: "۰۱",
    title: "معرفی زنده محصول",
    text: "جنس را نشان بده، سؤال را همان لحظه جواب بده. اعتماد از دیدن ساخته می‌شود، نه از کپشن.",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "معرفی زنده محصول مقابل دوربین",
  },
  {
    n: "۰۲",
    title: "ارتباط راحت با مشتری",
    text: "چت، فالو و اعلان؛ فروش از یک تراکنش خشک به گفت‌وگو تبدیل می‌شود.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "تیم در حال گفت‌وگو و همکاری",
  },
  {
    n: "۰۳",
    title: "خرید آنی و مزایده",
    text: "اگر کسی آماده است، همان لحظه می‌خرد. اگر هیجان جمع است، مزایده زنده قیمت را شفاف می‌سازد.",
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "مشتری در حال خرید با رضایت",
  },
  {
    n: "۰۴",
    title: "مارکت‌پلیس هوشمند",
    text: "فروشگاه‌ها در یک پلتفرم جمع‌اند. کشف، دنبال کردن و خرید در یک جریان — نه چند ابزار پراکنده.",
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "فضای مارکت و خرید کالا",
  },
];

export function World() {
  return (
    <section id="world" className="bg-[#05070c] pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[13px] text-blue-300/80">قابلیت‌ها</p>
          <h2 className="font-display mt-4 max-w-lg text-3xl font-semibold text-white sm:text-4xl">
            فروش هوشمند، نه ویترین خاموش
          </h2>
        </Reveal>
        <div className="mt-14 space-y-20 sm:space-y-28">
          {ITEMS.map((item, i) => (
            <article key={item.n} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="overflow-hidden rounded-[1.4rem]">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1100}
                    height={1400}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-sm text-white/35">{item.n}</p>
                <h3 className="font-display mt-4 text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                <span className="mt-6 block h-px w-16 bg-white/20 lux-line" />
                <p className="mt-6 max-w-sm text-sm leading-8 text-white/55">{item.text}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
