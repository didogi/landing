export type CtaAudience = "buyer" | "seller";

export type CtaLocation =
  | "header"
  | "hero"
  | "sellers"
  | "join"
  | "footer"
  | "mobile_sticky";

const siteUrl = String(import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

export const site = {
  name: "دیدوجی",
  nameEn: "Didogi",
  url: siteUrl,
  email: "hello@didogi.ir",
  locale: "fa_IR",
  themeColor: "#05070c",
  city: "تهران",
  title: "دیدوجی | لایوکامرس و فروش زنده در مارکت‌پلیس هوشمند",
  description:
    "در دیدوجی محصول را زنده معرفی کن، با مشتری گفت‌وگو کن و همان لحظه بفروش. مارکت‌پلیس لایوکامرس برای خرید زنده، فروش تعاملی و مزایده آنلاین.",
  ogImage: "/images/hero-1-1100.webp",
  cta: {
    buyer: {
      label: "مشاهده لایوها",
      href: "#join",
      audience: "buyer" as const,
    },
    seller: {
      label: "شروع فروشندگی",
      href: "#sellers",
      audience: "seller" as const,
    },
  },
} as const;
