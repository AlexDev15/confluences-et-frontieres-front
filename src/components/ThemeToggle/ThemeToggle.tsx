"use client";

import { useTheme } from "@/contexts/ThemeContext";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label="Toggle theme"
    >
      {theme === 'evenements' ? 'Événements' : 'Productions'}
    </button>
  );
}