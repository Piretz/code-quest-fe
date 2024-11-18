import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1E1E3F",
        accentYellow: "#F5C443",
        accentPurple: "#4E148C",
        successGreen: "#4CAF50",
        errorRed: "#F44336",
      },
    },
  },
  plugins: [],
};

export default config;
