import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/themeContext";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  function darkTheme() {
    setCurrentTheme("dark");
  }

  function lightTheme() {
    setCurrentTheme("light");
  }

  useEffect(() => {
    const htmlTag = document.querySelector("html");
    htmlTag.classList.remove("light", "dark");
    htmlTag.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <>
      <ThemeContext.Provider value={{ currentTheme, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
