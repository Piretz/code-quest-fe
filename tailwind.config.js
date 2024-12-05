/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // For files in the "app" directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // For files in the "components" folder
    "./src/ui/**/*.{js,ts,jsx,tsx}", // For files in the "ui" folder
  ],
  theme: {
    extend: {
      // Font customization
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#1E293B",
        secondary: "#3B82F6",
      },
    },
  },
  plugins: [],
};
