"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label = theme === "evenements" ? "evenements" : "productions";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-theme text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm border-2 border-theme hover:scale-105 active:scale-95 transition-transform shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
    >
      {label}
    </button>
  );
}
