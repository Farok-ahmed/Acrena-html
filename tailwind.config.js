// tailwind.config.js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        page: "var(--bg-page)",
        hero: "var(--bg-hero)", // hero section background
        "card-secondary": "var(--bg-card-secondary)",
        default: "var(--text-default)",
        secondary: "var(--text-secondary)",
        "border-default": "var(--border-default)",
        "contrast-light": "var(--bg-contrast-light)", // light contrast sections
      },
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
