/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#ffffff', 
        surface: '#ffffff',
        border: '#f1f5f9',
        sidebar: '#ffffff', 
        text: {
          main: '#0f172a', // Slate 900
          muted: '#64748b', // Slate 500
          inverse: '#ffffff'
        },
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316', // Orange 500
          600: '#ea580c', // Orange 600
          700: '#c2410c', // Orange 700
          900: '#7c2d12',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce3',
          500: '#22c55e',
          600: '#16a34a',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -5px rgba(249, 115, 22, 0.2)',
      }
    },
  },
  plugins: [],
}
