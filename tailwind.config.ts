import type { Config } from "tailwindcss";

/**
 * Maps CSS channel tokens to Tailwind colors with alpha:
 *   className="bg-primary/90 text-accent border-border"
 *
 * Source of truth: src/styles/tokens.css (:root).
 */
export default {
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",

        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          foreground: "rgb(var(--surface-foreground) / <alpha-value>)",
        },

        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },

        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
          hover: "rgb(var(--primary-hover) / <alpha-value>)",
          active: "rgb(var(--primary-active) / <alpha-value>)",
          muted: "rgb(var(--primary-muted) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
          hover: "rgb(var(--secondary-hover) / <alpha-value>)",
          active: "rgb(var(--secondary-active) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
          active: "rgb(var(--accent-active) / <alpha-value>)",
          muted: "rgb(var(--accent-muted) / <alpha-value>)",
          subtle: "rgb(var(--accent-subtle) / <alpha-value>)",
        },

        highlight: {
          DEFAULT: "rgb(var(--highlight) / <alpha-value>)",
          foreground: "rgb(var(--highlight-foreground) / <alpha-value>)",
          hover: "rgb(var(--highlight-hover) / <alpha-value>)",
          muted: "rgb(var(--highlight-muted) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },

        subtle: {
          DEFAULT: "rgb(var(--subtle) / <alpha-value>)",
          foreground: "rgb(var(--subtle-foreground) / <alpha-value>)",
        },

        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          strong: "rgb(var(--border-strong) / <alpha-value>)",
        },

        input: {
          DEFAULT: "rgb(var(--input) / <alpha-value>)",
          background: "rgb(var(--input-background) / <alpha-value>)",
        },

        ring: "rgb(var(--ring) / <alpha-value>)",

        inverse: {
          DEFAULT: "rgb(var(--inverse) / <alpha-value>)",
          foreground: "rgb(var(--inverse-foreground) / <alpha-value>)",
          muted: "rgb(var(--inverse-muted) / <alpha-value>)",
          border: "rgb(var(--inverse-border) / <alpha-value>)",
        },

        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
          hover: "rgb(var(--destructive-hover) / <alpha-value>)",
          muted: "rgb(var(--destructive-muted) / <alpha-value>)",
        },

        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
          foreground: "rgb(var(--success-foreground) / <alpha-value>)",
          muted: "rgb(var(--success-muted) / <alpha-value>)",
        },

        warning: {
          DEFAULT: "rgb(var(--warning) / <alpha-value>)",
          foreground: "rgb(var(--warning-foreground) / <alpha-value>)",
          muted: "rgb(var(--warning-muted) / <alpha-value>)",
        },

        info: {
          DEFAULT: "rgb(var(--info) / <alpha-value>)",
          foreground: "rgb(var(--info-foreground) / <alpha-value>)",
          muted: "rgb(var(--info-muted) / <alpha-value>)",
        },

        disabled: {
          DEFAULT: "rgb(var(--disabled) / <alpha-value>)",
          foreground: "rgb(var(--disabled-foreground) / <alpha-value>)",
        },

        overlay: "rgb(var(--overlay) / <alpha-value>)",

        slate: {
          50: "rgb(var(--slate-50) / <alpha-value>)",
          100: "rgb(var(--slate-100) / <alpha-value>)",
          200: "rgb(var(--slate-200) / <alpha-value>)",
          300: "rgb(var(--slate-300) / <alpha-value>)",
          400: "rgb(var(--slate-400) / <alpha-value>)",
          500: "rgb(var(--slate-500) / <alpha-value>)",
          600: "rgb(var(--slate-600) / <alpha-value>)",
          700: "rgb(var(--slate-700) / <alpha-value>)",
          800: "rgb(var(--slate-800) / <alpha-value>)",
          900: "rgb(var(--slate-900) / <alpha-value>)",
          950: "rgb(var(--slate-950) / <alpha-value>)",
        },

        blue: {
          50: "rgb(var(--blue-50) / <alpha-value>)",
          100: "rgb(var(--blue-100) / <alpha-value>)",
          200: "rgb(var(--blue-200) / <alpha-value>)",
          300: "rgb(var(--blue-300) / <alpha-value>)",
          400: "rgb(var(--blue-400) / <alpha-value>)",
          500: "rgb(var(--blue-500) / <alpha-value>)",
          600: "rgb(var(--blue-600) / <alpha-value>)",
          700: "rgb(var(--blue-700) / <alpha-value>)",
          800: "rgb(var(--blue-800) / <alpha-value>)",
          900: "rgb(var(--blue-900) / <alpha-value>)",
          950: "rgb(var(--blue-950) / <alpha-value>)",
        },

        cyan: {
          50: "rgb(var(--cyan-50) / <alpha-value>)",
          100: "rgb(var(--cyan-100) / <alpha-value>)",
          200: "rgb(var(--cyan-200) / <alpha-value>)",
          400: "rgb(var(--cyan-400) / <alpha-value>)",
          500: "rgb(var(--cyan-500) / <alpha-value>)",
          600: "rgb(var(--cyan-600) / <alpha-value>)",
          700: "rgb(var(--cyan-700) / <alpha-value>)",
        },

        violet: {
          50: "rgb(var(--violet-50) / <alpha-value>)",
          100: "rgb(var(--violet-100) / <alpha-value>)",
          200: "rgb(var(--violet-200) / <alpha-value>)",
          400: "rgb(var(--violet-400) / <alpha-value>)",
          500: "rgb(var(--violet-500) / <alpha-value>)",
          600: "rgb(var(--violet-600) / <alpha-value>)",
          700: "rgb(var(--violet-700) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px rgb(15 23 42 / 0.05)",
        elevated:
          "0 2px 4px rgb(15 23 42 / 0.04), 0 16px 40px rgb(15 23 42 / 0.07)",
        cta: "0 1px 2px rgb(15 23 42 / 0.06), 0 8px 20px rgb(37 99 235 / 0.22)",
      },
      ringOffsetColor: {
        DEFAULT: "rgb(var(--ring-offset) / <alpha-value>)",
      },
    },
  },
} satisfies Config;
