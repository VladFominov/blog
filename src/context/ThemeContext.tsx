"use client";
import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext({} as any);

const getFromLocalStorages = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<any>(() => {
    return getFromLocalStorages();
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
