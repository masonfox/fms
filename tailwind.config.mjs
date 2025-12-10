/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f3',
          100: '#dbe8e1',
          200: '#b7d1c3',
          300: '#8db3a0',
          400: '#67957d',
          500: '#4a7a61',
          600: '#3a614d',
          700: '#2f4e3e',
          800: '#273f33',
          900: '#21352b',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf5e1',
          200: '#fae9b8',
          300: '#f7d884',
          400: '#f3c04e',
          500: '#efa82a',
          600: '#d48a1f',
          700: '#b0691b',
          800: '#8f531c',
          900: '#76441b',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
