/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#2f281e',
        black1: '#544837',
        primary: '#ff9900',
        disabled: '#f7d9ab',
        blue: '#bcd0e5',
        red: '#ff0000',
        silver: '#adadad',
      },
    },
  },
  plugins: [],
};
