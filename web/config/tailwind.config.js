/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kotrina: {
          white: '#FFFFFF',
          linen: '#EBE6DF',
          soft: '#F2EEE8',
          mist: '#D9D4CE',
          ink: '#2F2A27',
          mute: '#5C554F',
          black: '#1A1715',
          coral: '#E89B94',
          blush: '#C45B7A',
          gold: '#C9A24A',
          rust: '#A33A28',
          parchment: '#D6C8B4',
          earth: '#7A5A3E',
          charcoal: '#241F1C',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '72rem',
      },
      letterSpacing: {
        brand: '0.18em',
      },
    },
  },
  plugins: [],
}
