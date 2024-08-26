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
          100: "#e6f2f2",
          200: "#b3d9d9",
          300: "#80c0c0",
          400: "#4da7a7",
          500: "#0d393c",
          600: "#0b3235",
          700: "#092b2e",
          800: "#072427",
          900: "#051d20",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
