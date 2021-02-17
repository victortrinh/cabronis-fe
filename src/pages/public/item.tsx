import { Button, Grid, useTheme } from "@12emake/design-system";
import { darkGray, green400, lightBlack, red250 } from "../../common/colors";
import { lgSpacing, smSpacing } from "../../common/spacing";

import { MainContainer } from "../../components/shared/mainContainer";
import NotFound from "../notFound";
import { Price } from "../../components/shared/price";
import React from "react";
import { cards } from "../../hardcode/cards";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = cards.find((card) => card.id === id);
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const [t] = useTranslation();

  if (!item) {
    return <NotFound />;
  }

  return (
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
              <div className="stock">
                {t("quantity-in-stock")} : {item.stock}
              </div>
            )}
          </div>
          <Button color="secondary" fullWidth disabled={item.stock <= 0}>
            {t("in-construction")}
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

type StyledContainerProps = {
  $isDark: boolean;
};

const StyledContainer = styled(MainContainer)<StyledContainerProps>`
  margin-top: ${lgSpacing};

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
      font-family: "Odibee Sans", cursive;
      font-weight: 400;
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

      .no-stock {
        padding: 5px 10px;
        background-color: ${red250};
        display: inline-block;
        border-radius: 5px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
      }

      .stock {
        padding: 5px 10px;
        background-color: ${green400};
        display: inline-block;
        border-radius: 5px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
      }
    }
  }
`;

export default Item;
