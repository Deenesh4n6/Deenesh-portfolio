/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#050b14', // near-black deep navy background
          800: '#0a1420',
          700: '#0f1c2c',
          600: '#152537',
        },
        accent: {
          cyan: '#3fd0e0',
          blue: '#4c8fff',
          green: '#3ee08a',
        },
        ink: {
          100: '#eef3f8',
          300: '#b7c4d1',
          500: '#7c8ea1',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,208,224,0.15), 0 0 24px rgba(63,208,224,0.08)',
      },
    },
  },
  plugins: [],
}
