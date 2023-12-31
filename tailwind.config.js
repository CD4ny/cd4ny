/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["nunito"],
      montserrat: ["nunito"],
    },
    extend: {
      colors: {
        "orange_(web)": {
          DEFAULT: "#faa916",
          100: "#352301",
          200: "#6a4602",
          300: "#9f6803",
          400: "#d48b04",
          500: "#faa916",
          600: "#fbbb43",
          700: "#fccc72",
          800: "#fddda1",
          900: "#feeed0",
        },
        white: {
          DEFAULT: "#fbfffe",
          100: "#00654c",
          200: "#00ca97",
          300: "#30ffcb",
          400: "#95ffe4",
          500: "#fbfffe",
          600: "#fbfffe",
          700: "#fcfffe",
          800: "#fdfffe",
          900: "#feffff",
        },
        dim_gray: {
          DEFAULT: "#6d676e",
          100: "#161516",
          200: "#2c2a2c",
          300: "#423e42",
          400: "#575358",
          500: "#6d676e",
          600: "#8b858c",
          700: "#a8a4a9",
          800: "#c5c2c6",
          900: "#e2e1e2",
        },
        eerie_black: {
          DEFAULT: "#1b1b1e",
          100: "#050506",
          200: "#0b0b0c",
          300: "#101012",
          400: "#151518",
          500: "#1b1b1e",
          600: "#46464d",
          700: "#71717d",
          800: "#a0a0a9",
          900: "#cfcfd4",
        },
        "blue_(munsell)": {
          DEFAULT: "#1b9aaa",
          100: "#051f22",
          200: "#0b3e45",
          300: "#105d67",
          400: "#157c8a",
          500: "#1b9aaa",
          600: "#28c8dd",
          700: "#5ed6e6",
          800: "#93e4ee",
          900: "#c9f1f7",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
