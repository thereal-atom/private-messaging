/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "#101216",
        "light-primary": "#363C4E",
        "dark-primary": "#303030",
        "very-dark-primary": "#151821",
        "secondary": "#6B7480",
        "very-light-secondary": "#8F9BAA",
        "light-secondary": "#3D434B",
        "dark-secondary": "#353A41",
        "very-dark-secondary": "#25292e",
        "accent": "#6366F1",
        "error": "#f87171",
      },
    },
  },
  plugins: [],
}
