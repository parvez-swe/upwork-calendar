/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pwhite: "rgba(255, 255, 255, 1)",
        swhite: "rgba(254, 254, 254, 1)",
        gray1: "#7F8596",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
