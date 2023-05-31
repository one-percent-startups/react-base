/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "399px",
      sm: "480px",
      md: "770px",
      lg: "1200px",
      xl: "1440px",
    },

    extend: {
      colors: {
        white: "#FFFFFF",
        purple: "#7337F2",
        mustad: "#FCDB7E",
        light_black:"#333333",
        light_gray:"#6B6E71",
        light_purple:"#E6D8FF",
        light_green:"#D8F2EE",
        primary_blue:"#4169E1",
        dark_blue:"#1E1E2E",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
