/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':  '#1F3777',
        'secondary': '#EAEAF4',
        'white-primary': '#F9F9F9',
        'silver-secondary': '#A7A7A8',
        'black-primary': '#000000'
      }
    },
  },
  plugins: [],
}

