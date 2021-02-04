import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from "@12emake/design-system";
import React, { ChangeEvent, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import home from "../../routes/pages/home";
import settings from "../../routes/pages/settings";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BottomNavigationBar = () => {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [t] = useTranslation();

  const onChange = (_: ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Hidden mdUp>
      <StyledBottomNavigation
        component="footer"
        value={value}
        onChange={onChange}
      >
        <StyledBottomNavigationAction
          value={home.path}
          label={t("home")}
          icon={home.path === value ? <HomeIcon /> : <HomeOutlinedIcon />}
        />
        <StyledBottomNavigationAction
          value={settings.path}
          label={t("settings")}
          icon={
            settings.path === value ? (
              <SettingsIcon />
            ) : (
              <SettingsOutlinedIcon />
            )
          }
        />
      </StyledBottomNavigation>
    </Hidden>
  );
};

const StyledBottomNavigation = styled(BottomNavigation)`
  position: static;
  width: 100vw;
  height: calc(env(safe-area-inset-bottom, -60px) + 60px);
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  padding-bottom: env(safe-area-inset-bottom, 0) !important;
  max-width: inherit !important;
`;

export default BottomNavigationBar;
