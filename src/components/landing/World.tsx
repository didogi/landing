import { Reveal } from "./Reveal";

const ITEMS = [
  {
    n: "۰۱",
    title: "سالن زنده",
    text: "استریم، نور و تن‌خور. محصول دیگر کارت نیست؛ یک حضور است.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "مدل در حال حرکت با پوشش editorial",
  },
  {
    n: "۰۲",
    title: "مزایده شبانه",
    text: "زمان محدود، پیشنهاد شفاف، قیمتی که در جمع شکل می‌گیرد — نه پشت پرده.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "فضای لوکس خرید پوشاک",
  },
  {
    n: "۰۳",
    title: "خرید آنی",
    text: "اگر لحظه مال توست، صبر لازم نیست. یک اشاره، و قطعه مال توست.",
    img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "جزئیات دوخت و پارچه",
  },
  {
    n: "۰۴",
    title: "حلقه نزدیکان",
    text: "فالو، اعلان، بازگشت به سالن فروشنده‌ای که سلیقه‌اش را می‌شناسی.",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&h=1400&q=80",
    alt: "پرتره فشن در نور طلایی",
  },
];

export function World() {
  return (
    <section id="world" className="bg-[#05070c] pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] text-blue-300/80">جهان دیدوگی</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold text-white sm:text-4xl">چهار حرکت، یک شب</h2>
        </Reveal>
        <div className="mt-14 space-y-20 sm:space-y-28">
          {ITEMS.map((item, i) => (
            <article
              key={item.n}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
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
                <p className="text-sm tracking-[0.35em] text-white/35">{item.n}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
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
