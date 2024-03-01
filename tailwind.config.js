/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1130px",
        smd: "968px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
