const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {},
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '2/5': '40%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '20': '20px',
     },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      sky: colors.sky,
      
    },
  },
  plugins: [],
}
