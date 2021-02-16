import { Button, Grid, useTheme } from "@12emake/design-system";
import { darkGray, lightBlack } from "../../common/colors";
import { lgSpacing, smSpacing } from "../../common/spacing";

import { MainContainer } from "../../components/shared/mainContainer";
import NotFound from "../notFound";
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
          <img src={item.image} alt={item.description} />
        </Grid>
        <Grid className="content" item xs={12} sm={12} md={6}>
          <div className="description">{item.description}</div>
          <div className="price">{item.price}</div>
          <Button color="secondary" fullWidth>
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

    .description {
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
  }
`;

export default Item;
