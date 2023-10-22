/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-wave": "url('/src/assets/TopWave.png')",
        RedBall: "url('/src/assets/RedPlasticBall.png')",
        OrangeBall: "url('/src/assets/OrangePlasticBall.png')",
        YellowBall: "url('/src/assets/YellowPlasticBall.png')",
      },
    },
  },
  plugins: [],
};
