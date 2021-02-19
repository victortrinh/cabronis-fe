import {
  Button,
  Grid,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import React, { ChangeEvent, useState } from "react";
import { darkGray, lightBlack, red250 } from "../../common/colors";
import { lgSpacing, smSpacing } from "../../common/spacing";

import { CartDialog } from "../../components/shared/cartDialog";
import { MainContainer } from "../../components/shared/mainContainer";
import NotFound from "../notFound";
import { Price } from "../../components/shared/price";
import { addToCart } from "../../contexts/cartContext/actions";
import { cards } from "../../hardcode/cards";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = cards.find((card) => card.id === id);
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);

  if (!item) {
    return <NotFound />;
  }

  const handleChange = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setQuantity(Number(event.target.value));
  };

  const handleClick = () => {
    dispatch(addToCart({ ...item, quantity }));
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <MainContainer $isMobile={isMobile}>
      <CartDialog open={openDialog} handleClose={closeDialog} />
      <StyledContainer $isDark={isDark}>
        <Grid container>
          <Grid className="image" item xs={12} sm={12} md={6}>
            <img src={item.image_str} alt={item.name} />
          </Grid>
          <Grid className="content" item xs={12} sm={12} md={6}>
            <div className="name">{item.name}</div>
            <div className="price">
              <Price value={item.price} />
            </div>
            <div className="description">{item.description}</div>
            <div className="stock-wrapper">
              {item.stock <= 0 ? (
                <div className="no-stock">{t("no-stock")}</div>
              ) : (
                <>
                  <div className="stock">
                    {t("quantity-in-stock")} : {item.stock}
                  </div>
                  {item.stock > 0 && item.stock <= 5 && (
                    <span className="low-stock">{t("low-stock")}</span>
                  )}
                </>
              )}
            </div>
            {item.stock > 0 && (
              <Select
                color="primary"
                value={quantity}
                variant="outlined"
                onChange={handleChange}
                fullWidth
              >
                {Array.from({ length: item.stock }, (_, i) => i + 1).map(
                  (i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  )
                )}
              </Select>
            )}
            <Button
              color="secondary"
              fullWidth
              disabled={item.stock <= 0}
              onClick={handleClick}
            >
              {t("add-to-cart")}
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>
    </MainContainer>
  );
};

type StyledContainerProps = {
  $isDark: boolean;
};

const StyledContainer = styled.div<StyledContainerProps>`
  margin-top: ${lgSpacing};

  .MuiInputBase-root {
    margin-bottom: 18px;
  }

  .image,
  .content {
    height: 300px;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .content {
    margin-top: ${smSpacing};

    .name {
      font-weight: 700;
      font-size: 32px;
      line-height: 35.46px;
      text-transform: uppercase;
    }

    .price {
      padding-top: 4px;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: ${(props) => (props.$isDark ? lightBlack : darkGray)};
      margin-bottom: ${lgSpacing};
    }

    .description {
      margin-bottom: ${smSpacing};
    }

    .stock-wrapper {
      margin-bottom: ${smSpacing};

      .no-stock,
      .low-stock {
        padding: 5px 10px;
        background-color: ${red250};
        display: inline-block;
        border-radius: 5px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
      }

      .low-stock {
        margin-left: 8px;
      }

      .stock {
        display: inline-block;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
`;

export default Item;
