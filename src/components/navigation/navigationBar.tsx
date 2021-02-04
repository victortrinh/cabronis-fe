import {
  Button,
  NavigationBar as ExternalNavigationBar,
  Hidden,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { NoDecorationLink } from "../shared/noDecorationLink";
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTranslation } from "react-i18next";

const LOGO_IMAGE_NAME = "cabronis.svg";

export const NavigationBar = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledNavigationBar
      position="static"
      color={isMobile ? "transparent" : "primary"}
      $isMobile
      $primarycolor={theme.palette.primary.main}
      $secondarycolor={theme.palette.primary.light}
    >
      <Toolbar>
        <StyledLogoContainer>
          <Hidden mdUp>
            <img
              src={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
              alt={t("home")}
            />
          </Hidden>
          <Hidden smDown>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
                alt={t("home")}
              />
            </Link>
          </Hidden>
        </StyledLogoContainer>
        <Hidden smDown>
          <StyledLink to="/settings">
            <Button startIcon={<SettingsIcon />} color="inherit" variant="text">
              {t("settings")}
            </Button>
          </StyledLink>
        </Hidden>
      </Toolbar>
    </StyledNavigationBar>
  );
};

const StyledLink = styled(NoDecorationLink)`
  margin-right: 20px;
`;

type StyledNavigationBar = {
  $isMobile: boolean;
  $primarycolor: string;
  $secondarycolor: string;
};

const StyledNavigationBar = styled(ExternalNavigationBar)<StyledNavigationBar>`
  background: ${(props) =>
    `linear-gradient(45deg, ${props.$primarycolor} 0%, ${props.$secondarycolor} 100%)`};

  ${(props) =>
    props.$isMobile &&
    css`
      padding-top: env(safe-area-inset-top, 0);
      box-shadow: none !important;

      img {
        height: 35px;
      }
    `}
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex: 1;

  a {
    display: flex;
  }
`;
