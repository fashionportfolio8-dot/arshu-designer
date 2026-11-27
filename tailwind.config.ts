import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#F4F0E9",
        parchment: "#E8E0D4",
        champagne: "#C8B28A",
        ink: "#24211E",
        cocoa: "#66564A"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;