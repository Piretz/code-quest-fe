/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkBlue: "#1e2a47",
      lightBlue: "#2b3c5a",
      yellow: "#facc15",
    },
  },
  plugins: [],
};