import { useState } from "react";
import type { Theme } from "../utils/global-types";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return { theme, toggleTheme };
}