/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        beige: '#F5F0E8',
        'beige-dark': '#EAE3D6',
        'beige-deep': '#D9CEBD',
        navy: '#1B3A5C',
        'navy-dark': '#102744',
        'navy-mid': '#2A5280',
        gold: '#C49A3C',
        'gold-light': '#D4B060',
        brick: '#B84A3C',
        'brick-light': '#D05C4D',
        cream: '#FDFAF5',
      },
      fontFamily: {
        serif: ['IBM Plex Serif', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
