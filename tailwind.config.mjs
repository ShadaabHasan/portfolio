/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Each colour points to a CSS variable from globals.css.
      // The variables change between light and dark mode, so these classes work in both.
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        soft: "var(--soft)",
        muted: "var(--muted)",
        box: "var(--box)",
        line: "var(--line)",
        note: "var(--note)",
        "note-line": "var(--note-line)",
        "note-ink": "var(--note-ink)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};