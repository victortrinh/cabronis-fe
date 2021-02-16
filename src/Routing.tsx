import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import { NavigationBar } from "./components/navigation/navigationBar";
import PwaInstallPopupIOS from "react-pwa-install-ios";
import { RootState } from "./rootState";
import Settings from "./pages/public/settings";
import { isLoggedIn } from "./storage/authentication";
import routes from "./routes";
import { setLoggedIn } from "./contexts/appContext/actions";
import settings from "./routes/pages/settings";
import signIn from "./routes/pages/authentication/signIn";
import styled from "styled-components";

type Props = {
  language: string;
  height: number;
  darkModeOn: boolean;
  toggleDarkModeOn: () => void;
};

const Routing: React.FC<Props> = ({
  darkModeOn,
  height,
  language,
  toggleDarkModeOn,
}) => {
  const LOGO_IMAGE_NAME = "favicon-32x32.png";
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setLoggedIn(true));
    }
  }, []);

  // TODO: Remove basename when pushing to real domain
  // Perhaps revert back to Router
  return (
    <BrowserRouter basename="cabronis-fe">
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
          {routes.map(({ key, needAuthentication, ...props }) => {
            if (needAuthentication) {
              return <PrivateRoute key={key} {...props} />;
            }

            return <Route key={key} {...props} />;
          })}
        </Switch>
        <BottomNavigationBar />
      </StyledContainer>
    </BrowserRouter>
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

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { loggedIn } = useSelector((state: RootState) => ({
    loggedIn: state.appContext.loggedIn,
  }));

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={`/${signIn.key}`} />
      }
    />
  );
};

export default Routing;
