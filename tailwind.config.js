/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1130px",
        smd: "968px",
        smn: "555px"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        sliderleft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        sliderright: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slide: "slider 0.5s ease-in-out",
        slideleft: "sliderleft 0.5s ease-in-out",
        slideright: "sliderright 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
