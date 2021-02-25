import "./App.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import React, { useEffect, useState } from "react";
import { ThemeProvider, useMediaQuery } from "@12emake/design-system";
import { isDarkMode, setDarkMode } from "./storage/darkModeOn";

import { IconContext } from "react-icons/lib";
import { Provider } from "react-redux";
import Routing from "./Routing";
import { getLanguage } from "./storage/language";
import i18next from "i18next";
import { store } from "./store";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkModeOn, setDarkModeOn] = useState(prefersDarkMode);

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (isDarkMode() !== darkModeOn) {
      setDarkModeOn(isDarkMode);
    }

    const lang = getLanguage();

    if (lang && i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
  }, []);

  const toggleDarkModeOn = () => {
    setDarkModeOn(!darkModeOn);
    setDarkMode(!darkModeOn);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkModeOn ? "darkBlackWhite" : "blackWhite"}>
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle" }, size: "18px" }}
        >
          <Routing
            darkModeOn={darkModeOn}
            height={height}
            toggleDarkModeOn={toggleDarkModeOn}
          />
        </IconContext.Provider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
