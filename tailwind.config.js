// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],     // ← Professional typeface
      },
      animation: {
        'text-glow': 'pulse 3s ease-in-out infinite',
        'gradient-move': 'gradientMove 15s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),           // ← Thin, styled scrollbars
  ],
};
