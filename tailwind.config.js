/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
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
        light_green:"#D8F2EE"
      },
    },
  },
  plugins: [],
};
