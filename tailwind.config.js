/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a28bff",
      },
      backgroundImage: {
        desktop: "url('/src/assets/bg.png')",
        mobile: "url('/src/assets/bg-mobile.png')",
        tablet: "url('/src/assets/bg-tablet.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
