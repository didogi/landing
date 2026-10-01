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
  email: String(import.meta.env.VITE_SUPPORT_EMAIL || "hello@didogi.com"),
  /** Public business details; empty values are hidden. */
  phone: String(import.meta.env.VITE_SUPPORT_PHONE ?? "").trim(),
  address: String(import.meta.env.VITE_SUPPORT_ADDRESS ?? "").trim(),
  enamad: {
    id: String(import.meta.env.VITE_ENAMAD_ID ?? "").trim(),
    code: String(import.meta.env.VITE_ENAMAD_CODE ?? "").trim(),
  },
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
    // Channels without a URL are not shown.
    instagram: String(import.meta.env.VITE_INSTAGRAM_URL ?? "").trim(),
    telegram: String(import.meta.env.VITE_TELEGRAM_URL ?? "").trim(),
    bale: String(import.meta.env.VITE_BALE_URL ?? "").trim(),
  },
} as const;
