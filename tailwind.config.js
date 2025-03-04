/** @type {import('tailwindcss').Config} */
const colors = require('./src/colors.json');
const buttons = require('./plugins/tailwind-buttons.cjs');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [buttons],
};
