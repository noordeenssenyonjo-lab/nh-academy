/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nhblue: '#0b2b5a',
        nhgreen: '#218c59',
        nhgold: '#d4af37'
      }
    }
  },
  plugins: [],
}
