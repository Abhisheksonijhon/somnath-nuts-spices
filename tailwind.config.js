/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { red: '#C0281A', 'red-dark': '#9B1F12', 'red-light': '#E03020', yellow: '#F5B800', 'yellow-light': '#FFD740', green: '#1B7737', cream: '#FFFDE7', 'cream-2': '#FFF8E1', orange: '#E65100', },
      },
      fontFamily: { poppins: ['Poppins','sans-serif'], playfair: ['"Playfair Display"','serif'], },
      animation: { 'fade-up': 'fadeUp 0.6s ease both', 'float': 'float 4s ease-in-out infinite', },
      keyframes: { fadeUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } }, float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } }, },
    },
  },
  plugins: [],
}
