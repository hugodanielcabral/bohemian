/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSerif: ["SourceSerif", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#f5f5e6",
          200: "#eaeaad",
          300: "#dcdca4",
          400: "#d0d08b",
          500: "#c4c49a",
          600: "#a1a17a",
          700: "#7e7e5a",
          800: "#5b5b3a",
          900: "#38381a",
        },
        secondary: {
          100: "#E6F7D1",
          200: "#CFF0A3",
          300: "#B8E975",
          400: "#A1E247",
          500: "#93DB17",
          600: "#007A4A",
          700: "#638B0E",
          800: "#4B630A",
          900: "#333B06",
        },
        tertiary: {
          100: "#E0E6ED",
          200: "#B3C1D1",
          300: "#859BB5",
          400: "#587699",
          500: "#2B507D",
          600: "#223F64",
          700: "#1A2F4B",
          800: "#111F32",
          900: "#09101A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
