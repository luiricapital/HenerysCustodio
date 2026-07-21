/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        'cream-2': '#f3efe9',
        navy: '#0d1c38',
        'navy-deep': '#08132a',
        coral: '#c21820',
        'coral-deep': '#9a1319',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Urbanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
