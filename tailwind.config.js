/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 15px 0 #1414141F',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'], 
      },
      colors: {
        Btn: {
          default: '#FFCE22',
          hover: '#FFD84D',
        },
        Gray: {
          default: '#ebe8e8',
          hover: '#9E9B9B',
        },
      },
      screens: {
        'xs': '416px',
      },
    },
  },
  plugins: [],
};
