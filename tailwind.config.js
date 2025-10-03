/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // **REPLACE your old animation/keyframes with this**
      animation: {
        'scroll-vertical': 'scroll-vertical linear forwards',
      },
      keyframes: {
        'scroll-vertical': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(calc(-100% + 350px))' },
        }
      }
    },
  },
  plugins: [],
}