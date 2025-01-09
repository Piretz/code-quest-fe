/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // For files in the "app" directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // For files in the "components" folder
    "./src/ui/**/*.{js,ts,jsx,tsx}", // For files in the "ui" folder
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-blue': 'inset 0 4px 6px #019AEC',
        'drop-blue': '0 10px 15px rgba(0, 0, 0, 0.3)', // Optional, if you want to customize the drop shadow
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
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
