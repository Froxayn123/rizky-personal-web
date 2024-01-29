/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a28bff",
      },
      backgroundImage: {
        desktop: "url('/public/assets/bg.png')",
        mobile: "url('/public/assets/bg-mobile.png')",
        tablet: "url('/public/assets/bg-tablet.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
