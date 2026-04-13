"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeType = 'evenements' | 'productions';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialiser le thème en détectant l'URL et le localStorage dès le premier rendu
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window === 'undefined') return 'evenements';

    // Priorité 1: Détecter si on est sur la page productions ou events
    const pathname = window.location.pathname;
    if (pathname.includes('/productions')) {
      return 'productions';
    }
    if (pathname.includes('/events')) {
      return 'evenements';
    }

    // Priorité 2: Charger depuis le localStorage
    const savedTheme = localStorage.getItem('app-theme') as ThemeType;
    if (savedTheme === 'evenements' || savedTheme === 'productions') {
      return savedTheme;
    }

    // Par défaut
    return 'evenements';
  });

  useEffect(() => {
    // Appliquer le thème au document
    document.documentElement.setAttribute('data-theme', theme);
    // Sauvegarder dans le localStorage
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Écouter les changements d'URL pour mettre à jour le thème
    const pathname = window.location.pathname;
    if (pathname.includes('/productions')) {
      setTheme('productions');
    } else if (pathname.includes('/events')) {
      setTheme('evenements');
    }
    // Si on n'est ni sur /productions ni sur /events, on garde le thème actuel (du localStorage)
  }, [])

  const toggleTheme = () => {
    setThemeState(prev => prev === 'evenements' ? 'productions' : 'evenements');
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};