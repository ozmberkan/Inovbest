/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        whiteText: "#f1f1f1",
        grayBorder: "#2b2b2b",
      },
      dropShadow: {
        "4xl": "0px 10px 15px rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        homeBg: "url('/src/assets/homeBg.svg')",
      },
    },
  },
  plugins: [],
};
