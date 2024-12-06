const { colors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      serif: ["Markazi Text", "serif"],
    },
    colors: {
      ...colors,
      primary: "#F4CE14",
      secondary: "#495E57",
      accent: "#EE9972",
      white: "#FFF",
      black: "#0A0A0A",
    },
    extend: {},
  },
};
