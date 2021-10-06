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
        customxs: 'center left -15rem'
      },
      boxShadow: {
        green: '0px 0px 50px 10px rgba(24, 230, 100, 0.25)',
        redHover: '0px 0px 15px 10px rgba(255, 64, 118, 0.25)',
        redActive: '0px 0px 15px 10px rgba(255, 64, 118, 0.25)'
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
