/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "#fff",
        "light-primary": "#fff",
        "dark-primary": "#fff",
        "very-dark-primary": "#fff",
        "secondary": "#fff",
        "very-light-secondary": "#fff",
        "light-secondary": "#fff",
        "dark-secondary": "#fff",
        "very-dark-secondary": "#fff",
        "accent": "#6366F1",
        "error": "#f87171",
      },
    },
  },
  plugins: [],
}
