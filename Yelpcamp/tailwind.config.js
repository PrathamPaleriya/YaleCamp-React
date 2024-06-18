/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f9f6f1',
          dark: '#726f6a',
          outline: "#e8e8e8"
        },
      },

      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
      },

      objectPosition: {
        'center-10': 'center +72%',
      },

      minWidth: {
        'sm': '640px',
      },
    },
  },
  plugins: [],
}