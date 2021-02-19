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
import { lightBlack, red250 } from "../../common/colors";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { NoDecorationLink } from "../shared/noDecorationLink";
import React from "react";
import { RootState } from "../../rootState";
import cart from "../../routes/pages/cart";
import faq from "../../routes/pages/faq";
import { removeCurrentUser } from "../../storage/authentication";
import { setLoggedIn } from "../../contexts/appContext/actions";
import settings from "../../routes/pages/settings";
import shop from "../../routes/pages/shop";
import signIn from "../../routes/pages/authentication/signIn";
import { useTranslation } from "react-i18next";
import wishlist from "../../routes/pages/wishlist";

export const NavigationBar: React.FC = () => {
  const { sellableItemsInCart, loggedIn } = useSelector((state: RootState) => ({
    loggedIn: state.appContext.loggedIn,
    sellableItemsInCart: state.cartContext.cart,
  }));
  const [t] = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const history = useHistory();
  const isHome = location.pathname === "/";
  const dispatch = useDispatch();

  const LOGO_IMAGE_NAME = "pscBreaks.png";

  const logout = () => {
    dispatch(setLoggedIn(false));
    removeCurrentUser();
  };

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
            <NoDecorationLink to={`/${shop.key}`}>
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
        <StyledLogoContainer $isHome={isHome} $isMobile={isMobile}>
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
            {loggedIn && (
              <StyledLink to={`/${wishlist.key}`}>
                <Button
                  startIcon={<AiOutlineStar />}
                  color={isDark ? "primary" : "secondary"}
                  variant="text"
                />
              </StyledLink>
            )}
            <StyledLink className="cart" to={`/${cart.key}`}>
              <Button
                startIcon={<AiOutlineShopping />}
                color={isDark ? "primary" : "secondary"}
                variant="text"
              />
              {sellableItemsInCart.length > 0 && (
                <div className="cart-number">{sellableItemsInCart.length}</div>
              )}
            </StyledLink>
            <NoDecorationLink to={`/${faq.key}`}>
              <Button color={isDark ? "primary" : "secondary"} variant="text">
                {t("faq")}
              </Button>
            </NoDecorationLink>
            <NoDecorationLink to={`/${settings.key}`}>
              <Button color={isDark ? "primary" : "secondary"} variant="text">
                {t("settings")}
              </Button>
            </NoDecorationLink>
            {!loggedIn ? (
              <NoDecorationLink className="sign-in" to={`/${signIn.key}`}>
                <Button color="secondary" variant="contained">
                  {t("sign-in")}
                </Button>
              </NoDecorationLink>
            ) : (
              <Button
                className="sign-out"
                onClick={logout}
                color="secondary"
                variant="contained"
              >
                {t("sign-out")}
              </Button>
            )}
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
    margin-left: 4px;
    margin-right: 4px;
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

  .sign-in,
  .sign-out {
    margin-left: 12px;
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

  .cart {
    position: relative;

    .cart-number {
      background-color: ${red250};
      color: white;
      position: absolute;
      right: 18px;
      bottom: 5px;
      padding: 1px 4px;
      text-align: center;
      font-size: 8px;
      border-radius: 1000px;
    }
  }

  ${(props) =>
    props.$isMobile &&
    css`
      padding-top: env(safe-area-inset-top, 0);
      background-color: transparent !important;
    `}
`;

type StyledLogoContainerProps = {
  $isHome: boolean;
  $isMobile: boolean;
};

const StyledLogoContainer = styled.div<StyledLogoContainerProps>`
  display: flex;
  flex: 1;
  justify-content: center;

  a {
    display: flex;
  }

  .title {
    font-size: 16px;
    font-weight: 900;
  }

  ${(props) =>
    props.$isMobile &&
    props.$isHome &&
    css`
      justify-content: flex-start;
    `}
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
`;
