/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-lime':'#ECFAD3',
        'dark-gradient':'#2BAA48',
        'light-gradient':'#85DB47',
        'dark-gray':'#666666',
        'my-green':'#A6CC39',
        'my-blue':'#EEFFF5',
      }
    },
  },
  plugins: [],
}