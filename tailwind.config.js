/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          Primary:'#161622',
          seconday: {
            default:'#ff9c01',
            100:'#1e1e2d',
            200:'#232533'

          },
          gray:{
            100:"#cdcde0"
          },
        },
        
        fontFamily: {
          pthin: ["Poppins", "sans-serif"],
          pextralight: ["Poppins-ExtraLight", "sans-serif"],
          plight: ["Poppins-Light", "sans-serif"],
          pregular: ["Poppins-Regular", "sans-serif"],
          psemibold: ["Poppins-SemiBold", "sans-serif"],
          pbold: ["Poppins-Bold", "sans-serif"],
          pblack: ["Poppins-Black", "sans-serif"],
          pmedium:["Poppins-Medium", "sans-serif"],
        },

      },
    },
    plugins: [],
  }