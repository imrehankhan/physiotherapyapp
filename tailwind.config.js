/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#3238F2',
        'secondary': {
          100: '#e2e2d5',
          200: '#888883',
        }
      },
      fontFamily: {
        'poppins': ['Poppins','sans-serif']
      },
    },
  },
  plugins: [],
}

