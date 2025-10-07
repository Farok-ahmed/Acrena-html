// tailwind.config.js (Tailwind v4)
// In v4, most configuration is done in CSS using @theme
// This file is optional but kept for backward compatibility
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Custom animations for preloader
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "dot-move": {
          "0%": { transform: "translate(60px, 0) rotate(0deg)" },
          "100%": { transform: "translate(60px, 0) rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1.5s linear infinite",
        "dot-move": "dot-move 1.5s linear infinite",
      },
    },
  },
};
