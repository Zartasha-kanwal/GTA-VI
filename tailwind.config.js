/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pricedown: ['Pricedown', 'sans-serif'],
      },
    },
  },
  plugins: [],
}