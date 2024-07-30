/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color-one": "var(--primary-color-one)",
        "primary-color-two": "var(--primary-color-two)",
      },
    },
  },

  plugins: [],
};
