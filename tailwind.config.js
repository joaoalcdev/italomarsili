const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing'
      },
      backgroundPosition: {
        custom: 'center left -30rem',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        customxs: 'center left -15rem',
        'right-bottom': 'right bottom',
        'right-top': 'right top'
      },
      boxShadow: {
        green: '0px 0px 50px 10px rgba(24, 230, 100, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        red: '0px 0px 10px 10px rgba(255, 64, 118, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        mobilexs: { max: '560px' },
        tabletxs: { max: '640px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}