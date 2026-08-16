# گزارش پیاده‌سازی لندینگ دیدوجی

## ماتریس حسابرسی

### موجود و خوب
- تم تاریک editorial، RTL، `lang="fa"`
- فونت self-host (WOFF2، subset عربی/لاتین، `font-display: swap`) و preload بدنه
- تصویر محلی AVIF/WebP با `srcset`/`sizes` و ابعاد ثابت
- توکن‌های رنگ و دکمه در `tokens.css` / `components.css`
- توقف انیمیشن هیرو بیرون از ویوپورت
- بدون شبیه‌سازی داشبورد اپ

### موجود ولی نیاز به بهبود (انجام شد)
- CTAهای عمومی → «مشاهده لایوها» / «شروع فروشندگی»
- پاراگراف هیرو و استوری برای اسکن ۳ ثانیه‌ای
- کنتراست متن ضروری (`white/70` به‌جای `white/40`)
- How-it-works فقط فروشنده → تب خریدار/فروشنده
- Trust یک پاراگراف → گرید ادعاهای تأییدشده
- منوی موبایل بدون تله فوکوس / Escape
- `React.lazy` برای سکشن‌های متنی سبک (حذف شد)
- انیمیشن زیاد (مارکی، حلقه، فیلم، زوم هاور)

### قبلاً نبود (اضافه شد)
- `Difference`، `ProductProof` (فلو editorial)، `FAQ`، `MobileStickyCTA`
- `src/config/site.ts`، `src/content/landing.fa.ts`، `src/lib/analytics.ts`
- JSON-LD، Open Graph، Twitter card، `robots.txt`، skip-link
- نوار آمار عددی حذف شد تا آمار ساختگی نباشد

### بدون داده واقعی قابل انتشار نیست
- اسکرین‌شات/ویدیوی محصول → TODO در `ProductProof.tsx`
- آمار کاربر، نظر مشتری، لوگو برند
- کارمزد، بازگشت وجه، زمان تسویه، احراز فروشنده، ضمانت پرداخت
- فرم لید (endpoint نیست؛ موفقیت جعلی ساخته نشد)
- Canonical / `og:url` مطلق تا `VITE_SITE_URL` ست شود
- `sitemap.xml` مطلق
- وزن IBM Plex 700 (الان 400/500/600)
- Prerender استاتیک (نیاز به تغییر معماری Vite/SPA)

## ادعاهای Trust که منتشر شد
پرداخت امن، ثبت سفارش روی سرور، قواعد شفاف مزایده — بر اساس بریف محصول همین ریپو.

منتشر نشد: احراز فروشنده، پشتیبانی/حل اختلاف، زمان تسویه، بدون کارمزد.

## اندازه‌گیری
رویدادها فقط اگر `VITE_MEASUREMENT_ID` در production (یا `VITE_ANALYTICS_DEV=true`) باشد: `cta_click`، `audience_tab_change`، `faq_open`، `scroll_depth`.

## پیشنهاد بعد
1. `VITE_SITE_URL=https://…` و تصویر OG مطلق
2. اسکرین واقعی لایو برای جایگزینی ProductProof
3. endpoint لید + فرم کوتاه
4. prerender با `vite-plugin-prerender` اگر دامنه ثابت شد
