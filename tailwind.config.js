/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a28bff",
      },
      backgroundImage: {
        desktop: "url('assets/bg.png')",
        mobile: "url('assets/bg-mobile.png')",
        tablet: "url('assets/bg-tablet.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
