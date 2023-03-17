/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mpBlackHeader: '#212121',
        mpBlack: '#161616',
        mpLightGray: '#DFDFDF',
        mpGrey: '#a5a5a5',
        mpDarkGrey: '#696969',
      },
    },
  },
  plugins: [],
};
