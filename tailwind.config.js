/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./case-study/fitlyn/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111d",
        panel: "#0f1b2b",
        mint: "#7ce0cb",
        gold: "#f4cd8f",
      },
      fontFamily: {
        display: ['"Sora"', '"Segoe UI"', "sans-serif"],
        sans: ['"Manrope"', '"Segoe UI"', "sans-serif"],
      },
      boxShadow: {
        ambient: "0 24px 60px rgba(2, 8, 16, 0.38)",
      },
      backgroundImage: {
        "mesh-spotlight":
          "radial-gradient(circle at 20% 10%, rgba(124, 224, 203, 0.18), transparent 28rem), radial-gradient(circle at 88% 2%, rgba(244, 205, 143, 0.14), transparent 24rem)",
      },
    },
  },
  plugins: [],
};
