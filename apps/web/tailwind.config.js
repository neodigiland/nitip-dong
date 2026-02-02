/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Premium Color Palette
        "primary": "#34d399", // Vibrant Mint - for CTAs and accents
        "primary-dark": "#10b981", // Slightly darker mint
        "forest": "#064e3b", // Deep Forest Green - for headings and expensive text
        "forest-light": "#065f46", // Lighter forest for hover states
        
        // Neutral backgrounds
        "secondary": "#0F172A", // Slate 900
        "background-light": "#F8FAFC", // Slate 50 - softer than pure white
        "background-dark": "#020617", // Slate 950
        "surface-light": "rgba(255, 255, 255, 0.7)",
        "surface-dark": "rgba(15, 23, 42, 0.7)",
        
        // Text colors
        "text-main": "#064e3b", // Deep Forest Green for main text
        "text-secondary": "#64748B", // Slate 500
        "text-heading": "#064e3b", // Forest for headings
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        "body": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "full": "9999px"
      },
      boxShadow: {
        // Premium soft diffused shadows
        'soft': '0 20px 40px -15px rgba(6, 78, 59, 0.1)',
        'soft-lg': '0 25px 50px -12px rgba(6, 78, 59, 0.15)',
        'soft-xl': '0 35px 60px -15px rgba(6, 78, 59, 0.2)',
        'glass': '0 8px 32px rgba(6, 78, 59, 0.08)',
        'glow': '0 0 40px rgba(52, 211, 153, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      letterSpacing: {
        'premium': '-0.02em',
        'tight-premium': '-0.03em',
      },
      lineHeight: {
        'premium': '1.4',
        'relaxed-premium': '1.75',
      },
    },
  },
  plugins: [],
}
