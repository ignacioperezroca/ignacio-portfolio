import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12110f",
          soft: "#2a2723",
          muted: "#676058"
        },
        paper: {
          DEFAULT: "#f8f5ef",
          warm: "#eee6d8",
          cool: "#eef2f1"
        },
        line: {
          DEFAULT: "#ded5c7",
          dark: "#34302b"
        },
        accent: {
          blue: "#4e6cff",
          green: "#0f6b5a",
          bronze: "#a76f3f"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Georgia",
          "serif"
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        lift: "0 24px 80px rgba(18, 17, 15, 0.12)",
        line: "inset 0 0 0 1px rgba(18, 17, 15, 0.08)"
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(18, 17, 15, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 17, 15, 0.045) 1px, transparent 1px)",
        "paper-grid-dark":
          "linear-gradient(rgba(248, 245, 239, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 245, 239, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
