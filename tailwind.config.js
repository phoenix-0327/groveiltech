/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FF5500', /* Primary Safety Flame Orange */
          600: '#FF5500',
          700: '#FF5500',
          800: '#E04B00',
          900: '#C2410C',
          950: '#431407',
          DEFAULT: '#FF5500',
        },
        hazard: {
          400: '#FDE047',
          500: '#FACC15',
          600: '#EAB308',
          DEFAULT: '#FACC15',
        },
        gold: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          DEFAULT: '#FACC15',
        },
        charcoal: {
          DEFAULT: '#0A0A0A',
          50: '#262626',
          100: '#1F1F1F',
          700: '#171717',
          800: '#121212',
          900: '#0A0A0A',
        },
        carbon: {
          void: '#000000',
          bg: '#0A0A0A',
          card: '#121212',
          surface: '#161616',
          border: '#262626',
          borderLight: '#333333',
          textMuted: '#A3A3A3',
          textSubtle: '#737373',
        },
        surface: {
          bg: '#0A0A0A',
          warm: '#121212',
          secondary: '#141414',
          subtle: '#181818',
          border: '#262626',
          borderSubtle: '#1F1F1F',
          dark: '#050505',
          textMuted: '#A3A3A3',
          card: '#121212',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'premium': '0 12px 32px -4px rgba(17, 42, 26, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 40px -8px rgba(17, 42, 26, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'dark-card': '0 14px 36px -6px rgba(0, 0, 0, 0.35)',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.025em',
        'tight': '-0.015em',
        'widest-logo': '0.22em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.95)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
