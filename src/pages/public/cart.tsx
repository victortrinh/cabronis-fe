import { Button, Grid, useMediaQuery, useTheme } from "@12emake/design-system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartPack } from "../../contexts/cartContext/state";
import { ConfirmDialog } from "../../components/shared/confirmDialog";
import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import { Payment } from "../../components/shared/payment";
import { Price } from "../../components/shared/price";
import { RootState } from "../../rootState";
import { Title } from "../../components/shared/title";
import { WarningMessages } from "../../components/shared/warningMessages";
import faq from "../../routes/pages/faq";
import { lgSpacing } from "../../common/spacing";
import { lightBlack } from "../../common/colors";
import { removeFromCart } from "../../contexts/cartContext/actions";
import shop from "../../routes/pages/shop";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { sellableItemsInCart } = useSelector((state: RootState) => ({
    sellableItemsInCart: state.cartContext.cart,
  }));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [removedItem, setRemovedItem] = useState<CartPack>();
  const [openRemovalDialog, setOpenRemovalDialog] = useState(false);

  if (sellableItemsInCart.length <= 0) {
    return (
      <MainContainer $isMobile={isMobile} $horizontalCentered>
        <EmptyCartTitle>{t("empty-cart-title")}</EmptyCartTitle>
        <>
          <NoDecorationLink to={`/${shop.key}`}>
            <Button color="secondary" variant="contained">
              {t("go-to-shop")}
            </Button>
          </NoDecorationLink>
        </>
      </MainContainer>
    );
  }

  const handleClick = (item: CartPack) => () => {
    setRemovedItem(item);
    setOpenRemovalDialog(true);
  };

  const handleConfirm = () => {
    if (removedItem) {
      dispatch(removeFromCart(removedItem));
    }
  };

  return (
    <MainContainer $isMobile={isMobile} $horizontalCentered>
      <ConfirmDialog
        open={openRemovalDialog}
        handleClose={() => setOpenRemovalDialog(false)}
        content={t("cart-removal-content")}
        onCancel={() => setOpenRemovalDialog(false)}
        onConfirm={handleConfirm}
      />
      <Container>
        <Title className="cart-title">{t("cart")}</Title>
        <div className="number-container">
          <div className="number-title">{t("my-bag")}</div>
          <div className="number">
            {sellableItemsInCart.length} {t("items")}
          </div>
        </div>
        {sellableItemsInCart.map((item) => (
          <Grid container key={item.sellable_id} className="item-container">
            <Grid item xs={3} sm={4} md={3}>
              <img
                data-src={item.image_path}
                className="lazyload"
                alt={item.name}
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid className="column middle" item xs={4} sm={4} md={5}>
              <div className="item-name">{item.name}</div>
              {!isMobile && (
                <div className="item-description">{item.description}</div>
              )}
            </Grid>
            <Grid className="column super-price" item xs={5} sm={4} md={4}>
              <div className="price-container">
                {!isMobile && (
                  <div>
                    <div className="price-title">{t("price")}</div>
                    <div className="price-number">
                      <Price value={item.price} />
                    </div>
                  </div>
                )}
                <div className="price-column">
                  <div className="price-title">{t("quantity")}</div>
                  <div className="price-number">{item.quantity}</div>
                </div>
                <div>
                  <div className="price-title">{t("total")}</div>
                  <div className="price-number">
                    <Price value={item.price * item.quantity} />
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleClick(item)}
                >
                  {t("remove")}
                </Button>
              </div>
            </Grid>
          </Grid>
        ))}
        <div className="price-container end">
          <div className="price-title">{t("total")}</div>
          <div className="price-number">
            <Price
              value={sellableItemsInCart.reduce(
                (a, b) => a + b.quantity * b.price,
                0
              )}
            />
          </div>
        </div>
        <div className="shipping">
          <NoDecorationLink to={`/${faq.key}`}>
            {t("shipping-not-included")} - {t("see-shipping")}
          </NoDecorationLink>
        </div>
        <WarningMessages>{t("cart-explanation")}</WarningMessages>
        <Payment />
      </Container>
    </MainContainer>
  );
};

const EmptyCartTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 24px;
`;

const Container = styled.div`
  margin-top: ${lgSpacing};
  width: 100%;

  .super-price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: inherit;
    }
  }

  .cart-title {
    text-align: center;
  }

  .column {
    padding-top: 20px;
  }

  .middle {
    padding-left: 20px;
    padding-right: 20px;
  }

  .item-container {
    padding: 24px 0;
    border-bottom: 1px solid ${lightBlack};

    .item-name {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }

  .number-container {
    display: flex;
    font-size: 22px;
    font-weight: 700;
    padding: 20px 10px;
    text-align: left;
    border-bottom: 3px solid black;

    .number-title {
      flex: 1;
    }
  }

  .price-container {
    display: flex;
    justify-content: flex-end;
    text-align: right;

    .price-column {
      margin: 0 24px;
    }

    .price-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }

  .end {
    padding: 24px 0;

    .price-number {
      font-size: 20px;
      font-weight: 600;
      margin-left: 12px;
    }
  }

  .shipping {
    text-align: right;
  }
`;

export default Cart;
