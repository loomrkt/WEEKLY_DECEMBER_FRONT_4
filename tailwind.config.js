/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181818',
        'primary2': '#4452FE',
        "primary3": "#DEDEDE",
        "primary4": "#343434",
      }
    },
  },
  plugins: [require('preline/plugin'),],
}
