/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: '"Lato", sans-serif'
      },
      backgroundImage: {
        heroBg: "url('/hero-bg.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

