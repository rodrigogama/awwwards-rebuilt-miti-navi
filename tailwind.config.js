module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        100: '#232323',
        500: '#000E13',
        550: '#001014',
      },
      blue: '#b3d4fc',
      cream: {
        50: '#e6dece',
        100: '#e7decf',
        150: '#E8DED0',
        500: '#FFDEAD',
      },
      white: '#fff',
    },
    screens: {
      lg: { max: '1090px' }, // => @media (max-width: 1090px) { ... }
    },
    extend: {
      fontFamily: {
        voyage: ['Voyage'],
        'gt-pressura-mono': ['GTPressuraMono'],
        'gt-sectra-display': ['GTSectraDisplay'],
      },
      scale: {
        80: '0.8',
      },
      transitionDuration: {
        600: '600ms',
      },
      transitionProperty: {
        top: 'top',
      },
      transitionTimingFunction: {
        miti: 'cubic-bezier(0.82, 0, 0.36, 1)',
      },
      width: {
        logo: '50px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
