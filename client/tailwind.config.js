/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5ba4a4',
        grey: {
          100: '#effafa',
          200: '#eef6f6',
          800: '#7b8e8e',
          900: '#2c3a3a',
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

