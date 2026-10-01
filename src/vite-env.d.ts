/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_APP_URL?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
  readonly VITE_SUPPORT_PHONE?: string;
  readonly VITE_SUPPORT_ADDRESS?: string;
  readonly VITE_ENAMAD_ID?: string;
  readonly VITE_ENAMAD_CODE?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_TELEGRAM_URL?: string;
  readonly VITE_BALE_URL?: string;
  readonly VITE_MEASUREMENT_ID?: string;
  readonly VITE_ANALYTICS_DEV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
