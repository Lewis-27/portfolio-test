/** @type {import('tailwindcss').Config} */
const icons = require("rocketicons/tailwind");
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        TextColor: 'rgba(0, 0, 0, 0.75)',
        TextColorLight: 'rgba(0, 0, 0, 0.5)',
        TextColorWhite: 'rgba(255, 255, 255, 0.9)',

        Orange: '#FF6700',
        OffWhite: '#EBEBEB',
        Gray: '#C0C0C0',
        PrimaryBlue: '#004E98',
        SecondaryBlue: '#3A6EA5',
      },
    },
  },
  plugins: [
    icons
  ],
}

