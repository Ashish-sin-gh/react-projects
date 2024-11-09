import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  currentTheme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
