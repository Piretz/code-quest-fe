/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            700: "#5D3B8E",
            800: "#4B2884",
            900: "#3C1B72",
          },
          yellow: {
            300: "#FFD700",
          },
          red: {
            500: "#E53E3E",
          },
          green: {
            500: "#48BB78",
            600: "#38A169",
            700: "#2F855A",
          },
        },
      },
    },
    plugins: [],
  };
  