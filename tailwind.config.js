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
        poppins: ["Poppins", "sans-serif"],
      },
      // Custom colors
      colors: {
        primary: "#1E293B", // Dark color
        secondary: "#3B82F6", // Accent blue
      },
      // Keyframes for animations
      keyframes: {
        // QCUnite logo spin animation
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
        // Typewriter animation to type the text continuously
        typewriter: {
          "0%": { width: "0%" },
          "30%": { width: "50%" }, // Fill the text
          "100%": { width: "50%" }, // Reset to start
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" }, // Cursor starts transparent
          "50%": { borderColor: "white" }, // Cursor blinks
        },
      },
      // Defining animations
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        typewriter:
          "typewriter 3s steps(var(--typewriter-steps, 15)) infinite, blink 0.4s step-end infinite",
      },
    },
  },
  plugins: [],
};
