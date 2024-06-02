/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'aldrich': ['Aldrich', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

