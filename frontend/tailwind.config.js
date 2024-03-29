/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#96a4d3',
        secondaryColor: ' #152046',
        altColor: '#aa8f76',
      }
    },
  },
  plugins: [],
}


