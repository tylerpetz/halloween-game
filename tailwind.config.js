module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark']
    }
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        scary: ['"Permanent Marker"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

