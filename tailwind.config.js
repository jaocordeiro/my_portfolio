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
        mpLightBlack: '#1A1A1A',
        mpBlack: '#161616',
        mpLightGray: '#DFDFDF',
        mpGrey: '#a5a5a5',
        mpDarkGrey: '#696969',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
  },
  plugins: [],
};
