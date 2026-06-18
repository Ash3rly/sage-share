/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f8faf6",
          100: "#f0f5ec",
          200: "#dce9d5",
          300: "#c8ddbe",
          400: "#a0cc8e",
          500: "#78ba5e",
          600: "#60944a",
          700: "#4a713a",
          800: "#344e2a",
          900: "#1e2b1a",
        },
      },
    },
  },
  plugins: [],
};
