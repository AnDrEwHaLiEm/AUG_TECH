import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C7A64E',
          50: '#faf8f3',
          100: '#f3ede1',
          200: '#e7d9c1',
          300: '#d7be99',
          400: '#c9a961',
          500: '#C7A64E', // Main brand color from Figma
          600: '#b8934e',
          700: '#856238',
          800: '#6d5031',
          900: '#5c432a',
        },
        gray: {
          DEFAULT: '#4E4E4E',
          light: '#878686',
        },
        background: {
          light: '#F5F5F5',
          icon: '#F1EEE5',
        },
        footer: {
          dark: '#1E1E1E',
        },
        border: {
          accent: '#F6E468',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e5',
          200: '#c3c6cc',
          300: '#9da2ab',
          400: '#787e8a',
          500: '#5f646f',
          600: '#4b4f57',
          700: '#3d4047',
          800: '#34363c',
          900: '#2d2f34',
          950: '#1a1b1e',
        }
      },
      fontFamily: {
        arabic: ['var(--font-cairo)', 'sans-serif'],
        english: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
