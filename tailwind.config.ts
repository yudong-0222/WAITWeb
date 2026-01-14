import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "icon-blue": "#0070f3",
        "tech-green": "#00FF96",
        "dark-bg": "#050a10",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 150, 0.3)",
        "glow-blue": "0 0 20px rgba(0, 112, 243, 0.3)",
      },
      backgroundImage: {
        "scan-lines":
          "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
      },
    },
  },
  plugins: [],
};

export default config;
