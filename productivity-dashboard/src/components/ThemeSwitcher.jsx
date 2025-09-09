import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{marginBottom:"10px"}}>
      Switch to {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}
