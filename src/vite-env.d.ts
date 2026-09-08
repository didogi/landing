/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_APP_URL?: string;
  readonly VITE_MEASUREMENT_ID?: string;
  readonly VITE_ANALYTICS_DEV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
