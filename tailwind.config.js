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
      backgroundImage: {
        homeBg: "url('/src/assets/homeBg.svg')",
      },
    },
  },
  plugins: [],
};
