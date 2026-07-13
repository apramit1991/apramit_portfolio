import { useState } from "react";

const META_COLOR = { light: "#ffffff", dark: "#07111f" };

// The <html data-theme> attribute is the source of truth — set before first
// paint by the inline boot script in index.html. React state only mirrors it
// for icon rendering. Default is always light; prefers-color-scheme is never
// consulted — dark is a deliberate user choice, persisted in localStorage.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage blocked — theme still applies for this visit
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", META_COLOR[next]);
    setTheme(next);
  };

  return { theme, toggle };
}
