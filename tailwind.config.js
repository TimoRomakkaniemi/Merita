/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // tummansininen
          light: '#3b82f6',   // vaaleansininen
          dark: '#172554',    // hyvin tumma sininen
        },
        secondary: {
          DEFAULT: '#d4a762', // kulta
          light: '#e9d5aa',
          dark: '#a67c39',
        },
        neutral: {
          DEFAULT: '#f8fafc', // vaalea tausta
          dark: '#0f172a',    // tumma teksti
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-background.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 