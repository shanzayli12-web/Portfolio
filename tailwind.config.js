/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          bg: {
            light: '#F7F3EC',
            dark: '#1B1712',
          },
          text: {
            light: '#2B241D',
            dark: '#EDE6DA',
          },
          accent: {
            DEFAULT: '#B5613D',
            hover: '#9E4E2C',
            light: '#E2A287',
          },
          muted: {
            light: '#766D64',
            dark: '#AFA69B',
          },
          border: {
            light: '#E4DEC9',
            dark: '#2E2720',
          }
        }
      },
      fontFamily: {
        sans: ['"Satoshi"', '"Inter"', 'sans-serif'],
        editorial: ['"Lora"', 'serif'],
      }
    },
  },
  plugins: [],
}
