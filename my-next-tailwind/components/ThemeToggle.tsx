"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border border-gray-300
      bg-white text-black
      dark:bg-slate-800 dark:text-white
      shadow hover:scale-105 transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}