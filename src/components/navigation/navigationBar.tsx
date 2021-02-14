import {
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineStar,
} from "react-icons/ai";
import {
  Button,
  NavigationBar as ExternalNavigationBar,
  Hidden,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { NoDecorationLink } from "../shared/noDecorationLink";
import React from "react";
import faq from "../../routes/pages/faq";
import { lightBlack } from "../../common/colors";
import settings from "../../routes/pages/settings";
import shop from "../../routes/pages/shop";
import { useTranslation } from "react-i18next";
import wishlist from "../../routes/pages/wishlist";

export const NavigationBar: React.FC = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const history = useHistory();
  const isHome = location.pathname === "/";

  const LOGO_IMAGE_NAME = isDark ? "cabronis.svg" : "cabronis-dark.svg";

  return (
    <StyledNavigationBar position="static" color="inherit" $isMobile={isMobile}>
      <StyledToolbar>
        <Hidden smDown>
          <div className="left-side">
            <NoDecorationLink to="/">
              <Button color={isDark ? "primary" : "secondary"} variant="text">
                {t("live")}
              </Button>
            </NoDecorationLink>
            <NoDecorationLink to={shop.key}>
              <Button color={isDark ? "primary" : "secondary"} variant="text">
                {t("shop")}
              </Button>
            </NoDecorationLink>
          </div>
        </Hidden>
        {!isHome && (
          <Hidden mdUp>
            <div className="float-left">
              <Button
                startIcon={<AiOutlineLeft />}
                color={isDark ? "primary" : "secondary"}
                onClick={() => history.goBack()}
                variant="text"
              />
            </div>
          </Hidden>
        )}
        <StyledLogoContainer>
          <Hidden smDown>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
                alt={t("home")}
              />
            </Link>
          </Hidden>
          <Hidden mdUp>
            {isHome ? (
              <img
                src={`${process.env.PUBLIC_URL}/${LOGO_IMAGE_NAME}`}
                alt={t("home")}
              />
            ) : (
              <div className="title">
                {location.pathname.includes("item")
                  ? t("shop")
                  : t(location.pathname.substring(1))}
              </div>
            )}
          </Hidden>
        </StyledLogoContainer>
        <Hidden smDown>
          <div className="right-side">
            <StyledLink to={wishlist.key}>
              <Button
                startIcon={<AiOutlineStar />}
                color={isDark ? "primary" : "secondary"}
                variant="text"
              />
            </StyledLink>
            <StyledLink to={faq.key}>
              <Button
                startIcon={<AiOutlineShopping />}
                color={isDark ? "primary" : "secondary"}
                variant="text"
              />
            </StyledLink>
            <NoDecorationLink to={faq.key}>
              <Button color={isDark ? "primary" : "secondary"} variant="text">
                {t("faq")}
              </Button>
            </NoDecorationLink>
            <NoDecorationLink to={settings.key}>
              <Button color={isDark ? "primary" : "secondary"} variant="text">
                {t("settings")}
              </Button>
            </NoDecorationLink>
          </div>
        </Hidden>
      </StyledToolbar>
    </StyledNavigationBar>
  );
};

const StyledLink = styled(NoDecorationLink)`
  display: flex;
  align-items: center;

  .MuiButton-startIcon {
    margin-left: 8px;
  }
`;

type StyledNavigationBar = {
  $isMobile: boolean;
};

const StyledNavigationBar = styled(ExternalNavigationBar)<StyledNavigationBar>`
  border-bottom: 1px solid ${lightBlack};
  box-shadow: none !important;
  img {
    height: 35px;
  }

  .menu-icon {
    float: right;
    cursor: pointer;
  }

  .left-side,
  .right-side {
    flex: 1;
  }

  .right-side {
    display: flex;
    justify-content: flex-end;
  }

  .float-left {
    position: absolute;
    left: 0;
  }

  ${(props) =>
    props.$isMobile &&
    css`
      padding-top: env(safe-area-inset-top, 0);
      background-color: transparent !important;
    `}
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  a {
    display: flex;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
  }
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
`;
