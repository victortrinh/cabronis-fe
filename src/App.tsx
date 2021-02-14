import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ThemeProvider, useMediaQuery } from "@12emake/design-system";
import { getDarkMode, setDarkMode } from "./storage/darkModeOn";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import { IconContext } from "react-icons/lib";
import { NavigationBar } from "./components/navigation/navigationBar";
import PwaInstallPopupIOS from "react-pwa-install-ios";
import Settings from "./pages/settings";
import { getLanguage } from "./storage/language";
import i18next from "i18next";
import routes from "./routes";
import settings from "./routes/pages/settings";
import styled from "styled-components";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [loading, setLoading] = useState(true);
  const [darkModeOn, setDarkModeOn] = useState(prefersDarkMode);
  const [height, setHeight] = useState(window.innerHeight);
  const [language, setLanguage] = useState("en");
  const LOGO_IMAGE_NAME = "favicon-32x32.png";

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    getDarkMode()
      .then((value) => {
        if (value && value !== darkModeOn) {
          setDarkModeOn(value);
        }
      })
      .then(() =>
        getLanguage().then((value) => {
          if (i18next.language !== value) {
            i18next.changeLanguage(value);
            setLanguage(value);
          }
        })
      )
      .then(() => setLoading(false));
  }, [setDarkModeOn, setLoading]);

  const toggleDarkModeOn = () => {
    setDarkModeOn(!darkModeOn);
    setDarkMode(!darkModeOn);
  };

  if (loading) {
    return null;
  }

  return (
    <ThemeProvider theme={darkModeOn ? "darkBlackWhite" : "blackWhite"}>
      <IconContext.Provider
        value={{ style: { verticalAlign: "middle" }, size: "18px" }}
      >
        <HashRouter>
          <StyledContainer $height={height}>
            <PwaInstallPopupIOS
              delay={0}
              lang={language}
              appIcon={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
            />
            <NavigationBar />
            <Switch>
              <Route
                exact
                path={settings.path}
                render={() => (
                  <Settings
                    darkModeOn={darkModeOn}
                    toggleDarkModeOn={toggleDarkModeOn}
                  />
                )}
              />
              {routes.map(({ key, ...props }) => (
                <Route key={key} {...props} />
              ))}
            </Switch>
            <BottomNavigationBar />
          </StyledContainer>
        </HashRouter>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

type StyledContainerProps = {
  $height: number;
};

const StyledContainer = styled.div<StyledContainerProps>`
  height: ${(props) => `calc(env(safe-area-inset-top) + ${props.$height}px)`};
  display: flex;
  flex-direction: column;
  touch-action: none;
`;

export default App;
