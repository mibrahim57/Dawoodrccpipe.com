import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C4881B",
          dark: "#2B2D33"
        }
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
