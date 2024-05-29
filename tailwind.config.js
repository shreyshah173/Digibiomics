// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          800: '#22543d',
          700: '#276749',
          600: '#2f855a',  // Add this line for the navbar
          500: '#38a169',  // Add this line for the navbar
          400: '#48bb78',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
