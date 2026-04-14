/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#100c08',
        'bg-alt': '#1c1410',
        primary: '#c63c30',
        'primary-dark': '#8a1f1a',
        accent: '#d9a441',
        parchment: '#f7f2e7',
        muted: '#d2c3a7',
        paper: '#f3e5c8',
        surface: '#2e1c11',
        'surface-alt': '#201409',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Cardo"', 'serif'],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
