import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,md,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        north: {
          black: "var(--background)",
          charcoal: "var(--background-secondary)",
          surface: "var(--surface)",
          card: "var(--card)",
          line: "var(--border)",
          muted: "var(--muted)",
          accent: "var(--accent)",
          text: "var(--text)"
        }
      },
      fontFamily: {
        sans: [
          "Satoshi",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        mono: [
          "SFMono-Regular",
          "Cascadia Code",
          "Roboto Mono",
          "Menlo",
          "monospace"
        ]
      },
      boxShadow: {
        "north-glow": "var(--glow-shadow)",
        "north-panel": "var(--panel-shadow)"
      },
      backgroundImage: {
        "north-radial": "radial-gradient(circle at 50% 0%, var(--glow-color), transparent 42%)",
        "precision-grid":
          "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        shimmer: "shimmer 3.5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: [typography]
};

export default config;
