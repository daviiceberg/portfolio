import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        canvas: "#0A0A0B",
        surface: "#111113",
        surface2: "#18181B",
        ink: "#EDECE8",
        muted: "#8C8A85",
        gold: "#C8A96E",
      },
      boxShadow: {
        glow: "0 0 80px rgba(200, 169, 110, 0.07)",
        card: "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
