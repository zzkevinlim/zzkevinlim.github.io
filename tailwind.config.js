/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
import debugScreens from "tailwindcss-debug-screens";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        primary: ["Product Sans", ...defaultTheme.fontFamily.sans],
        secondary: ["Product Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#FFC91E",
          50: "#FFFAEB",
          100: "#FFF4D1",
          200: "#FFEAA3",
          300: "#FFE07A",
          400: "#FFD54D",
          500: "#FFC91E",
          600: "#E6B000",
          700: "#AD8500",
          800: "#705600",
          900: "#382B00",
          950: "#1F1700",
        },
        secondary: {
          DEFAULT: "#384051",
          50: "#EAECF0",
          100: "#D2D6E0",
          200: "#A8B0C3",
          300: "#7A87A3",
          400: "#58647F",
          500: "#384051",
          600: "#2E3442",
          700: "#212630",
          800: "#171A21",
          900: "#0A0C0F",
          950: "#060709",
        },
      },
    },
  },
  plugins: [debugScreens, containerQueries],
};
