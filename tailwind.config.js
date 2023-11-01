/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        earlyDawn: {
          50: "hsl(45, 92%, 95%)",
          100: "hsl(45, 89%, 89%)",
          200: "hsl(45, 90%, 77%)",
          300: "hsl(43, 89%, 65%)",
          400: "hsl(40, 89%, 56%)",
          500: "hsl(35, 85%, 50%)",
          600: "hsl(29, 87%, 44%)",
          700: "hsl(23, 83%, 37%)",
          800: "hsl(20, 76%, 31%)",
          900: "hsl(19, 72%, 26%)",
          950: "hsl(18, 83%, 14%)",
        },
        banana: {
          DEFAULT: "hsl(43, 100%, 67%)", // 300
          50: "hsl(48, 100%, 99%)",
          100: "hsl(45, 100%, 92%)",
          200: "hsl(45, 100%, 80%)",
          300: "hsl(43, 100%, 67%)",
          400: "hsl(40, 100%, 59%)",
          500: "hsl(35, 95%, 50%)",
          600: "hsl(29, 98%, 44%)",
          700: "hsl(23, 94%, 37%)",
          800: "hsl(19, 85%, 31%)",
          900: "hsl(19, 80%, 26%)",
          950: "hsl(19, 94%, 14%)",
        },
        strawberry: {
          DEFAULT: "hsl(0, 99%, 50%)", // 600
          50: "hsl(0, 100%, 97%)",
          100: "hsl(0, 100%, 93%)",
          200: "hsl(0, 100%, 88%)",
          300: "hsl(0, 100%, 79%)",
          400: "hsl(0, 100%, 67%)",
          500: "hsl(0, 100%, 57%)",
          600: "hsl(0, 99%, 50%)",
          700: "hsl(0, 100%, 42%)",
          800: "hsl(0, 97%, 35%)",
          900: "hsl(0, 86%, 31%)",
          950: "hsl(0, 100%, 16%)",
        },
        tangerine: {
          DEFAULT: "hsl(27, 100%, 54%)", // 500
          50: "hsl(37, 100%, 96%)",
          100: "hsl(36, 100%, 92%)",
          200: "hsl(34, 100%, 83%)",
          300: "hsl(33, 100%, 72%)",
          400: "hsl(29, 100%, 61%)",
          500: "hsl(27, 100%, 54%)",
          600: "hsl(23, 95%, 48%)",
          700: "hsl(19, 93%, 40%)",
          800: "hsl(17, 84%, 34%)",
          900: "hsl(18, 79%, 28%)",
          950: "hsl(15, 86%, 15%)",
        },
        watermelon: {
          DEFAULT: "hsl(109, 50%, 44%)", // 500
          50: "hsl(107, 53%, 97%)",
          100: "hsl(106, 58%, 93%)",
          200: "hsl(109, 55%, 85%)",
          300: "hsl(108, 53%, 73%)",
          400: "hsl(109, 49%, 58%)",
          500: "hsl(109, 50%, 44%)",
          600: "hsl(110, 54%, 36%)",
          700: "hsl(110, 50%, 29%)",
          800: "hsl(110, 45%, 24%)",
          900: "hsl(111, 44%, 20%)",
          950: "hsl(112, 57%, 10%)",
        },
        sky: {
          DEFAULT: "hsl(189, 68%, 66%)", // 300
          50: "hsl(180, 68%, 96%)",
          100: "hsl(187, 71%, 90%)",
          200: "hsl(188, 68%, 82%)",
          300: "hsl(189, 68%, 66%)",
          400: "hsl(190, 63%, 53%)",
          500: "hsl(191, 70%, 43%)",
          600: "hsl(194, 67%, 36%)",
          700: "hsl(195, 61%, 31%)",
          800: "hsl(197, 51%, 27%)",
          900: "hsl(199, 47%, 24%)",
          950: "hsl(199, 58%, 15%)",
        },
        lava: {
          DEFAULT: "hsl(180, 2%, 16%)", // 900
          50: "hsl(180, 2%, 90%)",
          100: "hsl(180, 3%, 85%)",
          200: "hsl(180, 3%, 76%)",
          300: "hsl(180, 3%, 63%)",
          400: "hsl(180, 3%, 47%)",
          500: "hsl(180, 3%, 37%)",
          600: "hsl(180, 3%, 30%)",
          700: "hsl(180, 3%, 25%)",
          800: "hsl(180, 3%, 21%)",
          900: "hsl(180, 2%, 16%)",
          950: "hsl(0, 0%, 0%)",
        },
      },
      fontFamily: {
        kalam: ["Kalam"],
        rasa: ["Rasa"],
        display: ["Kalam"],
        body: ["Rasa"],
      },
      fontSize: {
        // "clamp-h1":
        //   "clamp(4.5rem, 3.267427884615385rem + 5.258413461538461vw, 8rem)",
        "clamp-h1":
          "clamp(3rem, 2.295673076923077rem + 3.004807692307692vw, 5rem)",
        "clamp-h2":
          "clamp(2.5rem, 1.9717548076923077rem + 2.2536057692307687vw, 4rem)",
        "clamp-h3":
          "clamp(2rem, 1.6478365384615385rem + 1.502403846153846vw, 3rem)",
        "clamp-h4":
          "clamp(1.375rem, 1.3309795673076923rem + 0.18780048076923075vw, 1.5rem)",
      },
      backgroundImage: {
        "gradient-tangerine-diagonal": "var(--gradient-tangerine-diagonal)",
        "gradient-lilypad-diagonal": "var(--gradient-lilypad-diagonal)",
        "gradient-gray-diagonal": "var(--gradient-gray-diagonal)",
        "gradient-sky-diagonal": "var(--gradient-sky-diagonal)",
        "gradient-watermelon-diagonal": "var(--gradient-watermelon-diagonal)",
        "gradient-lava-diagonal": "var(--gradient-lava-diagonal)",
        "gradient-Top-recipes": "var(---gradient-Top-recipes)",
        "gradient-banana-Top-Recipes": "var(---gradient-banana-Top-recipes)",
        RedBall: "url('/src/assets/HomePage/RedPlasticBall.png')",
        YellowBall: "url('/src/assets/HomePage/YellowPlasticBall.png')",
        OrangeBall: "url('/src/assets/HomePage/OrangePlasticBall.png')",
      },
      scale: {
        175: "1.75",
      },
    },
    plugins: [],
  },
};
