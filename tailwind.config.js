/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        RedBall: "url('/src/assets/RedPlasticBall.png')",
        YellowBall: "url('/src/assets/YellowPlasticBall.png')",
        OrangeBall: "url('/src/assets/OrangePlasticBall.png')",
      },
    },
  },
  plugins: [],
};
