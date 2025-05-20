/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#64748b',
          dark: '#475569',
          light: '#94a3b8',
        },
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fbbf24',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#f8fafc',
        },
        foreground: {
          DEFAULT: '#0f172a',
          muted: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 