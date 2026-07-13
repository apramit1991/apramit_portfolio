/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./case-study/fitlyn/index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: "#07111d",
        panel: "#0f1b2b",
        mint: "#7ce0cb",
        gold: "#f4cd8f",
        // chat theme tokens — resolve only where chat.css defines the vars
        surface: "var(--bg-primary)",
        "surface-2": "var(--bg-secondary)",
        elevated: "var(--bg-elevated)",
        "surface-hover": "var(--bg-hover)",
        line: "var(--border-subtle)",
        "line-strong": "var(--border-strong)",
        "ink-1": "var(--text-primary)",
        "ink-2": "var(--text-secondary)",
        "ink-3": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-ink": "var(--accent-ink)",
        success: "var(--success)",
        grape: "var(--purple)",
      },
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        ambient: "0 24px 60px rgba(2, 8, 16, 0.38)",
        card: "var(--shadow-card)",
      },
      backgroundImage: {
        "mesh-spotlight":
          "radial-gradient(circle at 20% 10%, rgba(124, 224, 203, 0.18), transparent 28rem), radial-gradient(circle at 88% 2%, rgba(244, 205, 143, 0.14), transparent 24rem)",
      },
    },
  },
  plugins: [],
};
