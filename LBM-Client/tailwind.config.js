/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f7931a',
        customGray: '#CFD5EA',
        // Color2: '#CED3E5',
        // customBlue: '#527BC4'

      },

      fontFamily: {
        fb: ['Agdasima'],
      },
      fontWeight: {
        heavy: ['700']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

