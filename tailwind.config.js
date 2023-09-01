/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      outfit: 'Outfit, sans-serif'
    },
    screens: {
      desktop: '1440px'
    },
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'dark-blue-wallpaper': 'hsl(217, 54%, 11%)',
      'dark-blue-card': 'hsl(216, 50%, 16%)',
      'dark-blue-line': 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}

