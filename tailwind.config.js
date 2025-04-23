/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: '#fdfaf5',
        scienceBlue: '#0a66c2',
        pampas: '#e9e5df'
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}