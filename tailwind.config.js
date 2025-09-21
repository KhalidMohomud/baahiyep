/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        // Dark mode colors
        dark: {
          bg: '#0F172A',
          surface: '#1E293B',
          card: '#334155',
          text: '#F1F5F9',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-slow': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
