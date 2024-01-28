/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Permanent Marker", "cursive"],
        ayal: ["Monoton", "sans-serif"],
        miller: ["Black Ops One", "system-ui"],
        japan: ["Archivo Black", "sans - serif"],
        leo: ["Playfair Display", "serif"],
        joe: ["Dancing Script", "cursive"],
        parking: ["Noto Sans", "sans - serif"],
        fast: ["Archivo Black", 'sans - serif'],
      },
    },
  },
  plugins: [],
};
