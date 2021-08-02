const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      offset: '#1bc1b6',
      primary: '#2623CC',
      'primary-200': '#003399',
      info: '#E7E7FF'
    }),
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {},
      colors: { primary: '#2623CC', 'primary-200': '#003399' },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1408px'
      },
      backgroundSize: {
        ...defaultTheme.backgroundSize,
        'size-55': '55%'
      },
      height: {}
    }
  },
  plugins: []
}
