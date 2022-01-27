const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        titles: ['Karla']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        slate: colors.slate,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        sky: colors.sky,
        amber: colors.amber,
        
      },
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '2/5': '40%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '20': '20px',
     },
     
  },
  plugins: [],
}
