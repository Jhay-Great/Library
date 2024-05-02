import { plugin } from 'postcss';


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
      },
      backgroundImage: {
        gradient: ' linear-gradient(199deg, #003a -67%, transparent);'
      }
    },
  },
  plugins: [],
}


