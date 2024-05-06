/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      light: "#FEEBD7",
      yellow: "#FEBC77",
      orange: "#FB462C",
      red: "#890A0B",
      black: "#24292E",
    },
    fontFamily: {
      display: ["MuseoModerno", "sans-serif"],
      sans: ["Libre Franklin", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
