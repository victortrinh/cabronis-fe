import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BottomNavigationBar from "./components/navigation/bottomNavigationBar";
import { IconContext } from "react-icons/lib";
import { IoShareOutline } from "react-icons/io5";
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
import { useTranslation } from "react-i18next";

type Props = {
  height: number;
  darkModeOn: boolean;
  toggleDarkModeOn: () => void;
};

const Routing: React.FC<Props> = ({ darkModeOn, height, toggleDarkModeOn }) => {
  const [t] = useTranslation();
  const LOGO_IMAGE_NAME = "apple-touch-icon.png";
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
        <PwaInstallPopupIOS delay={0}>
          <PwaDiv>
            <div className="image-apps">
              <div className="app-icon-skeleton-lighter" />
              <div className="app-icon-skeleton" />
              <img
                src={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
                alt="Application"
              />
              <div className="app-icon-skeleton" />
              <div className="app-icon-skeleton-lighter" />
            </div>
            <div className="pwa-title">{t("install-pscbreaks")}</div>
            <div className="pwa-details">{t("install-pscbreaks-detailed")}</div>
            <div className="pwa-ending">
              {t("install-pscbreaks-ending")}

              <IconContext.Provider value={{ size: "24px", color: "#0E7EFF" }}>
                <IoShareOutline />
              </IconContext.Provider>

              {t("install-pscbreaks-ending-2")}
            </div>
          </PwaDiv>
        </PwaInstallPopupIOS>
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

const PwaDiv = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-apps {
    display: flex;
    margin-bottom: 20px;

    img {
      border-radius: 10px;
      width: 50px;
    }

    .app-icon-skeleton,
    .app-icon-skeleton-lighter {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-color: #f0f0f0;
      margin-left: 8px;
      margin-right: 8px;
    }

    .app-icon-skeleton-lighter {
      background-color: #fafafa;
    }
  }

  .pwa-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .pwa-details {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .pwa-ending {
    font-size: 14px;

    svg {
      margin-bottom: -4px;
    }
  }
`;

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
