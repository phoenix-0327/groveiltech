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
          50: '#F2F7F4',
          100: '#E1ECE5',
          200: '#C2DACB',
          300: '#94BF9F',
          400: '#4E9867',
          500: '#2A6F42',
          600: '#215935',
          700: '#1D4A2D', /* Primary Groveil forest green */
          800: '#163923',
          900: '#102A1A',
          DEFAULT: '#1D4A2D',
        },
        gold: {
          50: '#FDF9F1',
          100: '#FBF1DC',
          200: '#F6DFB5',
          300: '#ECC786',
          400: '#DFAB50',
          500: '#CF8A2E', /* Accent ochre from logo */
          600: '#B5701E',
          700: '#8F5318',
          DEFAULT: '#CF8A2E',
        },
        surface: {
          bg: '#FFFFFF',
          secondary: '#F7F8FA',
          subtle: '#FAFBFB',
          border: '#EAEAEA',
          borderSubtle: '#F0F0F0',
          dark: '#171717',
          textMuted: '#737373',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'premium': '0 12px 32px -4px rgba(17, 42, 26, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 40px -8px rgba(17, 42, 26, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'tighter': '-0.025em',
        'tight': '-0.015em',
        'widest-logo': '0.22em',
      }
    },
  },
  plugins: [],
}
