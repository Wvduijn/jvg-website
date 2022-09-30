/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'saffron': {
          100: '#ffa347',
          200: '#ff9933',
          300: '#ffa347',
          400: '#ff9933',
          500: '#ff870f',
        },
        'blue-violet': {
          100: '#6930c5',
          200: '#602cb5',
          300: '#5728a4',
          400: '#4f2494',
          500: '#431f7f',
        },
        'kombu': {
          100: '#5a7262',
          200: '#516758',
          300: '#485b4e',
          400: '#3f5045',
          500: '#36453b',
        },
        'ebony': {
          100: '#808980',
          200: '#767f76',
          300: '#6c756c',
          400: '#626a62',
          500: '#515751',
        },
        'ivory': {
          100: '#dbe9af',
          200: '#e1edbf',
          300: '#e8f2cf',
          400: '#f0f6df',
          500: '#f5f9e9',
        },
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        RobotoSlab: ['Roboto Slab', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      },
      lineHeight: {
        '0': '0'
      }
    },
  },
  plugins: [],
}
