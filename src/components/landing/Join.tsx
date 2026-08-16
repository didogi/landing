import { Reveal } from "./Reveal";

export function Join() {
  return (
    <section id="join" className="bg-[#05070c] px-5 pb-24 pt-8 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.8rem]">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053f8306b0e3?auto=format&fit=crop&w=1800&h=900&q=80"
            alt="سالن نمایش پوشاک در نور کم"
            width={1800}
            height={900}
            loading="lazy"
            className="h-[28rem] w-full object-cover sm:h-[32rem]"
          />
          <div className="absolute inset-0 bg-[#05070c]/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="max-w-lg text-3xl font-semibold text-white sm:text-5xl">شب اول را از دست نده</h2>
            <p className="mt-4 max-w-md text-sm leading-8 text-white/60">
              فروشنده باش و آتلیه بساز، یا به‌عنوان مهمان وارد سالن‌های زنده شو.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#atelier"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-cta hover:bg-primary-hover"
              >
                ثبت‌نام فروشنده
              </a>
              <a
                href="#world"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm text-white hover:border-white/60"
              >
                ورود خریدار
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
