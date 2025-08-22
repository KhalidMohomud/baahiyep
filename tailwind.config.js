/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        primaryDark: '#E64A19',
        secondary: '#1A237E',
        navy: '#1E2A4A',
        lightGray: '#F5F5F5',
        brandOrange: '#FF5722',
        brandNavy: '#1E2A4A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}