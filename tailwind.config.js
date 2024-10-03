/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
