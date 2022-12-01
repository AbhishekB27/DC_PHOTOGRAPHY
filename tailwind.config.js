/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancingScript' :['Dancing Script','san-serif'],
        'poppins' :['Poppins','san-serif'],
        'ubuntu' :['Ubuntu','san-serif'],
      }
    },
  },
  plugins: [],
}
