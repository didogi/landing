import { Reveal } from "./Reveal";

export function Trust() {
  return (
    <section className="bg-[#05070c] px-5 py-20 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-[1.6rem] border border-white/10 px-6 py-14 text-center sm:px-16">
          <p className="text-[13px] text-blue-300/80">اعتماد</p>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            تعامل زنده، با قواعد شفاف
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/45">
            پرداخت امن است. مزایده روی سرور ثبت می‌شود؛ نه روی گوشی فروشنده. قیمت‌گذاری منصفانه، بدون تقلب — تا هیجان لایو به بی‌اعتمادی تبدیل نشود.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default Trust;
