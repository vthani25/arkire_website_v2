/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arkire: {
          light: '#fff0e6',
          mid: '#ffe5cc',
          pale: '#fffaee',
          orange: '#f08c4f',
          brand: '#f97316', // similar to orange-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out both',
        scaleIn: 'scaleIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};