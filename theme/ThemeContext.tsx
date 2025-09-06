import React, { createContext, useContext, useState, useEffect } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightColors, darkColors, Colors } from "./colors";
import { typography } from "./typography";

type Theme = {
  colors: Colors;
  typography: typeof typography;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Theme>({
  colors: lightColors,
  typography,
  isDark: false,
  toggleTheme: () => {},
});

const STORAGE_KEY = "@app_theme_mode";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = Appearance.getColorScheme(); 
  const [isDark, setIsDark] = useState(systemScheme === "dark");
    const [manualTheme, setManualTheme] = useState<"light" | "dark" | null>(null);


   useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTheme === "dark" || savedTheme === "light") {
        setManualTheme(savedTheme as "dark" | "light");
        setIsDark(savedTheme === "dark");
      }
    })();
  }, []);

  useEffect(() => {
  const listener = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    if (!manualTheme) {
      setIsDark(colorScheme === "dark");
    }
  };

  const sub = Appearance.addChangeListener(listener);

  return () => {
    sub.remove();
  };
}, [manualTheme]);


  const toggleTheme = async () => {
    setIsDark((prev) => {
      const newValue = !prev;
      AsyncStorage.setItem(STORAGE_KEY, newValue ? "dark" : "light");
      return newValue;
    });
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ colors, typography, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
