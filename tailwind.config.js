/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        shadowMix : '0 0 2em rgba(102, 110, 255, 0.667)',
        shadowBlue: '0 0 2em rgba(49, 120, 198, 0.667)'
      }
    },
  },
  plugins: [],
}

