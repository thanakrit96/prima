module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["kanit"],
    },
    screens: {
      sm: {'max': '640px'},
      md: {'min': '640px', 'max': '1200px'},
      lg: "1201px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
