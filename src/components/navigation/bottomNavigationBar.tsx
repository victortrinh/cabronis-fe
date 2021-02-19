import {
  AiFillHome,
  AiFillShop,
  AiFillShopping,
  AiFillStar,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineStar,
} from "react-icons/ai";
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from "@12emake/design-system";
import { FaRegUser, FaUser } from "react-icons/fa";
import React, { ChangeEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { RootState } from "../../rootState";
import account from "../../routes/pages/account";
import cart from "../../routes/pages/cart";
import faq from "../../routes/pages/faq";
import home from "../../routes/pages/home";
import item from "../../routes/pages/item";
import { red250 } from "../../common/colors";
import settings from "../../routes/pages/settings";
import shop from "../../routes/pages/shop";
import signIn from "../../routes/pages/authentication/signIn";
import signUp from "../../routes/pages/authentication/signUp";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import wishlist from "../../routes/pages/wishlist";

const BottomNavigationBar = () => {
  const { sellableItemsInCart } = useSelector((state: RootState) => ({
    sellableItemsInCart: state.cartContext.cart,
  }));
  const [t] = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const onChange = (_: ChangeEvent<{}>, newValue: any) => {
    history.push(newValue);
  };

  const getIcon = (
    path: string | string[] | undefined,
    iconFilled: React.ReactNode,
    iconOutlined: React.ReactNode
  ) => {
    if (path === location.pathname) {
      return iconFilled;
    }

    return iconOutlined;
  };

  const getShopIcon = (
    iconFilled: React.ReactNode,
    iconOutlined: React.ReactNode
  ) => {
    const pathname = location.pathname;
    if (shop.path === pathname || pathname.includes(item.key)) {
      return iconFilled;
    }

    return iconOutlined;
  };

  const getAccountIcon = (
    iconFilled: React.ReactNode,
    iconOutlined: React.ReactNode
  ) => {
    const pathname = location.pathname;
    if (
      account.path === pathname ||
      faq.path === pathname ||
      settings.path === pathname ||
      signIn.path === pathname ||
      signUp.path === pathname
    ) {
      return iconFilled;
    }

    return iconOutlined;
  };

  return (
    <Hidden mdUp>
      <StyledBottomNavigation
        component="footer"
        value={location.pathname}
        onChange={onChange}
      >
        <StyledBottomNavigationAction
          value={home.path}
          label={t("home")}
          icon={getIcon(home.path, <AiFillHome />, <AiOutlineHome />)}
        />
        <StyledBottomNavigationAction
          value={wishlist.path}
          label={t("wishlist")}
          icon={getIcon(wishlist.path, <AiFillStar />, <AiOutlineStar />)}
        />
        <StyledBottomNavigationAction
          value={shop.path}
          label={t("shop")}
          icon={getShopIcon(<AiFillShop />, <AiOutlineShop />)}
        />
        <StyledBottomNavigationAction
          value={cart.path}
          label={t("cart")}
          icon={getIcon(
            cart.path,
            <div className="cart">
              <AiFillShopping />{" "}
              {sellableItemsInCart.length > 0 && (
                <div className="cart-number">{sellableItemsInCart.length}</div>
              )}
            </div>,
            <div className="cart">
              <AiOutlineShopping />{" "}
              {sellableItemsInCart.length > 0 && (
                <div className="cart-number">{sellableItemsInCart.length}</div>
              )}
            </div>
          )}
        />
        <StyledBottomNavigationAction
          value={account.path}
          label={t("account")}
          icon={getAccountIcon(<FaUser />, <FaRegUser />)}
        />
      </StyledBottomNavigation>
    </Hidden>
  );
};

const StyledBottomNavigation = styled(BottomNavigation)`
  position: static;
  width: 100vw;
  height: calc(env(safe-area-inset-bottom, -60px) + 60px);

  .MuiBottomNavigationAction-root {
    transition: none;
  }

  .MuiBottomNavigationAction-iconOnly {
    margin-bottom: 10px;
  }

  .cart {
    position: relative;

    .cart-number {
      background-color: ${red250};
      color: white;
      position: absolute;
      left: 10px;
      top: 10px;
      padding: 1px 4px;
      font-size: 8px;
      border-radius: 1000px;
    }
  }
`;

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  padding-bottom: env(safe-area-inset-bottom, 0) !important;
  max-width: inherit !important;

  .MuiBottomNavigationAction-label {
    display: none;
  }
`;

export default BottomNavigationBar;
