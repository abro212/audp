/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030B17',
          900: '#07152B',
          850: '#0A1C38',
          800: '#0D2346',
          700: '#143161',
          600: '#1E4484',
          100: '#E8EFFB',
          50: '#F2F6FD'
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309'
        },
        primary: {
          DEFAULT: '#0A1C38',
          dark: '#07152B',
          light: '#1E4484',
          accent: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif']
      }
    },
  },
  plugins: [],
}
