/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ncaa: {
          navy: '#003B75',
          gold: '#B3A369',
        },
      },
    },
  },
  plugins: [],
};