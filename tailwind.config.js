/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      boxshadow: {
        '3xl':'0px 1px 10px 0px rgba(0, 0, 0, 0.10)',
      },
      fontFamily: {
        'Work-Sans': "'Work Sans', sans-serif",
      }
    },
  },
  plugins: [],
}

