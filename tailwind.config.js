/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Para sa app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Para sa components folder
    "./src/ui/**/*.{js,ts,jsx,tsx}", // Para sa UI-specific files
  ],
  theme: {
    extend: {
      // Custom theme extensions (optional)
      colors: {
        primary: "#1E293B",
        secondary: "#3B82F6",
      },
    },
  },
  plugins: [],
};
