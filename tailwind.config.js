/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#292020',
          100: '#372b2b',
          200: '#3C2929',
          300: '#850a0a',
          500: '#a70b0b',
          700: '#f1ba0a',
          900: '#f6de26'
        }
      }
    }
  },
  plugins: []
}
