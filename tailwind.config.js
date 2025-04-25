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
          DEFAULT: '#a49178', // lämmin beige
          light: '#cfc0ad',   // vaalea beige
          dark: '#7d6c5a',    // tumma beige/ruskea
        },
        secondary: {
          DEFAULT: '#644f3b', // tumma mokka
          light: '#9c8167',   // keskitumma ruskea
          dark: '#433427',    // hyvin tumma mokka
        },
        neutral: {
          DEFAULT: '#f9f5f0', // erittäin vaalea beige tausta
          dark: '#35302a',    // tumma teksti
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
        'scrollDot': 'scrollDot 2s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0) translateX(-50%)', opacity: '1' },
          '100%': { transform: 'translateY(6px) translateX(-50%)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      clipPath: {
        'market': 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)',
        'diagonal': 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)',
      },
      transitionDelay: {
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
      },
      blur: {
        '3xl': '64px',
      },
      textShadow: {
        'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
        'lg': '0 2px 10px rgba(0, 0, 0, 0.7)',
        'xl': '0 2px 15px rgba(0, 0, 0, 0.9)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-xl': {
          textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 