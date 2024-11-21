/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/components.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-gradient": "#FFC107",
        "orange-gradient": "#FF5722",
      },
    },
  },
  darkMode: "class", // Enables dark mode via class
  plugins: [],
};

  