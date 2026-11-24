import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      colors: {
        heading: "#132939", // Universal Heading Color Token
        brand: {
          50: "#F0F7FC",
          100: "#E1EFF8",
          200: "#B8DCF1",
          300: "#82C2E7",
          400: "#42A2DC",
          500: "#1474B8", // Core Brand Color
          600: "#10609B",
          700: "#0D4C7C",
          800: "#09375A",
          900: "#06253C",
          950: "#031422",
        },
      },
      fontSize: {
        hero: ["52px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        section: ["36px", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        body: ["16px", { lineHeight: "1.6" }],
        nav: ["14px", { lineHeight: "1.4" }],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(20, 116, 184, 0.15)",
        "card-hover": "0 20px 40px -15px rgba(20, 116, 184, 0.3)",
        glow: "0 0 25px rgba(20, 116, 184, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
