import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // On starting, the website is always in light mode by default
    if (typeof window !== 'undefined') {
      // Clear legacy dark mode preference if set automatically
      try {
        localStorage.removeItem('easy-trip-theme');
        const stored = localStorage.getItem('easy-trip-theme-user-choice');
        if (stored === 'dark') {
          return true;
        }
      } catch {
        // localStorage fallback
      }
      return false; // Default: Light Mode
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      try {
        localStorage.setItem('easy-trip-theme-user-choice', 'dark');
      } catch {}
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('easy-trip-theme-user-choice', 'light');
      } catch {}
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
}
