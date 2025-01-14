import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'apricot': 'FDCDB7',
      },
      fontFamily: {
        'sourceCode': ["Source Code Pro", "Roboto", "sans-serif"],
        'ubuntu': ["Ubuntu", "Roboto", "sans-serif"],
        'jura': ["Jura", "Ubuntu", "Source Code Pro", "Roboto", "sans-serif"],
        'pixel': ["PixelCode Thin"]
      },
      backgroundImage: {
        'starry-sky': "url('/images/starry-sky-bg.jpg')",
        'landing-bg': "url('/images/landing-bg.jpg')",
        
      },
      backgroundColor: {
        'yellow': '#FBFD90',
        
      }
    },
  },
  plugins: [],
} satisfies Config;
