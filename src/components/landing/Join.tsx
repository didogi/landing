import { Reveal } from "./Reveal";

export function Join() {
  return (
    <section id="join" className="bg-[#05070c] px-5 pb-24 pt-8 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.8rem]">
          <img
            src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1800&h=900&q=80"
            alt="فضای فروش و تعامل با مشتری"
            width={1800}
            height={900}
            loading="lazy"
            className="h-[28rem] w-full object-cover sm:h-[32rem]"
          />
          <div className="absolute inset-0 bg-[#05070c]/72" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="font-display max-w-lg text-3xl font-semibold text-white sm:text-5xl">از همین‌جا شروع کن</h2>
            <p className="mt-4 max-w-md text-sm leading-8 text-white/60">
              وارد اپ شو و لایوها را ببین، یا به‌عنوان فروشنده ثبت‌نام کن و فروش هوشمند را شروع کن.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#top"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
              >
                ورود به اپ
              </a>
              <a
                href="#sellers"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm text-white hover:border-white/60"
              >
                ثبت‌نام فروشنده
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
