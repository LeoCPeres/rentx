/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      "lg": "54px",
      "xl": "20px"
    },
    extend: {
      colors: {
        'primary': '#DC1637',
        'black': '#1B1B1F',
        'green': '#03B352',

        'primary-hover': '#B2122C'
      }
    },
  },
  plugins: [],
}
