"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

type ThemeType = "evenements" | "productions";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window === "undefined") return "evenements";

    const pathname = window.location.pathname;
    if (pathname.includes("/productions")) return "productions";
    if (pathname.includes("/events")) return "evenements";

    const savedTheme = localStorage.getItem("app-theme") as ThemeType;
    if (savedTheme === "evenements" || savedTheme === "productions") {
      return savedTheme;
    }

    return "evenements";
  });

  const setTheme = useCallback((newTheme: ThemeType) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) =>
      prev === "evenements" ? "productions" : "evenements"
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.includes("/productions")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("productions");
    } else if (pathname.includes("/events")) {
      setTheme("evenements");
    }
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
