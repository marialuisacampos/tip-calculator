/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#C5E4E7",
          200: "#F3F8FB",
          300: "#00474B",
          400: "#26C2AD",
          500: "#24A596",
          600: "#9FE8DF",
        },
        gray: {
          100: "#7B8482",
        },
      },
      letterSpacing: {
        widest: "0.5em",
      },
    },
  },
  plugins: [],
};
