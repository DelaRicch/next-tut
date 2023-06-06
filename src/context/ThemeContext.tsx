"use client"
import { ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  handleToggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  handleToggle: () => {},
  mode: "dark",
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState("dark");

  const handleToggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ handleToggle, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
