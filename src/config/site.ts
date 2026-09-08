export type CtaAudience = "buyer" | "seller";

export type CtaLocation =
  | "header"
  | "hero"
  | "who"
  | "sellers"
  | "join"
  | "footer"
  | "mobile_sticky";

const siteUrl = String(import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");
const appUrl = String(
  import.meta.env.VITE_APP_URL ?? "https://didogi.com",
).replace(/\/$/, "");

export const site = {
  name: "دیدوجی",
  nameEn: "Didogi",
  url: siteUrl || "https://didogi.com/landing",
  email: "hello@didogi.com",
  locale: "fa_IR",
  themeColor: "#05070c",
  city: "تهران",
  title: "دیدوجی | لایوکامرس و فروش زنده در مارکت‌پلیس هوشمند",
  description:
    "در دیدوجی محصول را زنده معرفی کن، با مشتری گفت‌وگو کن و همان لحظه بفروش. مارکت‌پلیس لایوکامرس برای خرید زنده، فروش تعاملی و مزایده آنلاین.",
  ogImage: `${siteUrl || "https://didogi.com/landing"}/images/hero-1-1100.webp`,
  appUrl,
  cta: {
    buyer: {
      label: "مشاهده لایوها",
      href: `${appUrl}/live`,
      audience: "buyer" as const,
    },
    seller: {
      label: "شروع فروشندگی",
      href: `${appUrl}/seller/apply`,
      audience: "seller" as const,
    },
  },
  social: {
    instagram: "",
    telegram: "",
    bale: "",
  },
} as const;
