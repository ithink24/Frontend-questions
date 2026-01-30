import React, { createContext, useContext, useState } from "react";

/* create context */
const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <h1>{theme.toUpperCase()} MODE</h1>
        <ThemeButton />

        <style>{`
          .light {
            background: #fff;
            color: #000;
            min-height: 100vh;
            padding: 40px;
          }

          .dark {
            background: #121212;
            color: #fff;
            min-height: 100vh;
            padding: 40px;
          }

          button {
            padding: 10px 16px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
}

/* use context directly – no custom hook */
function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      Switch Theme
    </button>
  );
}
