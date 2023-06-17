/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '100px',
      md: '960px',
      '1300px': '1300px',
      '1100px': '1100px',
      '900px': '900px',
      '700px': '700px',
      '650px': '650px',
    },
    extend: {},
  },
  plugins: [],
};
