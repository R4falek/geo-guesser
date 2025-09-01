'use client'
import Button from "./components/Button/Button.Component";
import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
  const {toggleTheme, theme} = useTheme()
  return (
    <div>
      <button onClick={toggleTheme}>theme toggle {theme}</button>
      <Button />
      elo
    </div>
  );
}
