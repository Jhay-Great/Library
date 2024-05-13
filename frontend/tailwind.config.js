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

        // unique colors
        frenchRose: '#f14b7e',
        special: '#fda389',

        // blue variants
        berkeleyBlue: '#003543',
        cerulean: '#2f7394',
        lapisLazuli: '#1C6185',
        indigoDye: '#004B82',
        verdigris: '#46BBBB',
        
      },
      backgroundImage: {
        gradient: ' linear-gradient(199deg, #003a -67%, transparent);'
      },
      fontFamily: {
        // family=Poetsen+One&display=swap
        poetsen: 'Poetsen One'
      }
    },
  },
  plugins: [],
}


