/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "'Poppins',sans-serif",
        'bakbak': "'Bakbak One',sans-serif",
        'young': "'Young Serif',sans-serif",
        'roboto':'"Roboto", sans-serif'
      },
      fontSize: {
        'custom-md': "32px",
        'custom-lg': "40px",
        'custom-xl': "46px",
        'custom-2xl': "55px",
        'custom-3xl': "64px",
        'custom-4xl': "75px",
        'custom-5xl': "80px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "1.5rem",
        },
        screens: {
          lg: "1164px",
        },
      },
      colors: {
        'medium-blue': "#0010C2",
        'yellow-orange': "#FF9B0F",
        'palatinate-blue': "#3243FF",
        'ghost-white': "#F9F9F9",
        "cultured": "#F8F6F6",
        "lotion": "#FAFAFA",
    
      },
      boxShadow:{
        'skill-cards': "0px 5px 3.4px 0px #EAE3E3",
        'team-meeting': "0px 4px 4px 0px #00000040",
        'button-default': '9px 0px 0px 8px #0010C2',
        'button-hover':'9px 0px 0px 8px #FF9B0F'
      }
    },
  },
  plugins: [],
}