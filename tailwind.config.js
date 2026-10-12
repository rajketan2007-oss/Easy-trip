/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#287DFA',
          dark: '#0F4BD2',
          soft: '#EAF2FF',
          hover: '#1B6DE8',
        },
        accent: {
          DEFAULT: '#FF7A1A',
          hover: '#E8660B',
          soft: '#FFF1E5',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F7FA',
        },
        surface: {
          DEFAULT: '#FFFFFF',
        },
        text: {
          DEFAULT: '#0F294D',
          muted: '#5E6C84',
        },
        border: {
          DEFAULT: '#E3E8EF',
        },
        success: '#12B76A',
        error: '#E5484D',
        dark: {
          bg: '#080E1E',
          'bg-alt': '#0C142B',
          surface: '#111D3D',
          card: '#15244C',
          border: '#1D3063',
          text: '#F1F5F9',
          'text-muted': '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(15, 41, 77, 0.05)',
        'soft': '0 4px 16px rgba(15, 41, 77, 0.08)',
        'soft-lg': '0 12px 32px rgba(15, 41, 77, 0.12)',
        'card': '0 4px 20px rgba(15, 41, 77, 0.07)',
        'card-hover': '0 16px 36px rgba(40, 125, 250, 0.18)',
        'floating': '0 16px 48px rgba(15, 41, 77, 0.14)',
        'glow-primary': '0 8px 24px rgba(40, 125, 250, 0.28)',
        'glow-accent': '0 8px 24px rgba(255, 122, 26, 0.3)',
      },
      borderRadius: {
        'input': '12px',
        'btn': '12px',
        'card': '16px',
        'pill': '999px',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      letterSpacing: {
        'widest-xl': '0.15em',
        'widest-2xl': '0.22em',
      },
    },
  },
  plugins: [],
}
