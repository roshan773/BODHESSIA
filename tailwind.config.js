/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070706',
          900: '#0B0B09',
          800: '#12110E',
          700: '#1A1916',
          600: '#24231F',
        },
        parchment: {
          100: '#FAF8F5',
          200: '#F4F0E8',
          300: '#E7DDCC',
          400: '#D9CDB8',
          500: '#B8B0A2',
        },
        saffron: {
          300: '#F5D38A',
          400: '#E0B25B',
          500: '#C89D4B',
          600: '#A9783B',
          700: '#8A5E29',
        },
        bronze: {
          400: '#9E8055',
          500: '#80633E',
          600: '#644C2C',
        },
        cinnabar: {
          500: '#8B3A2B',
          600: '#754A3C',
        },
        jade: {
          500: '#30463D',
          600: '#243B30',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
