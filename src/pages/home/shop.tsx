import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  GridList,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import { darkGray, lightBlack } from "../../common/colors";
import { lgSpacing, xsSpacing } from "../../common/spacing";

import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import React from "react";
import { Title } from "../../components/shared/title";
import { cards } from "../../hardcode/cards";
import item from "../../routes/pages/item";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type Props = {
  limit?: number;
};

export const Shop: React.FunctionComponent<Props> = ({ limit }) => {
  const [t] = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const getColumns = () => {
    if (isMobile) {
      return 2;
    }

    if (isTablet) {
      return 3;
    }

    return 4;
  };

  const innerContainer = (
    <Container container justify="center" alignItems="center">
      {(limit || !isMobile) && <Title className="title">{t("shop")}</Title>}
      <GridList
        className="card-list"
        cellHeight="auto"
        cols={getColumns()}
        spacing={20}
      >
        {cards.slice(0, limit).map((card) => (
          <Grid className="card" key={card.id}>
            <NoDecorationLink to={`/${item.key}/${card.id}`}>
              <StyledCard $isDark={isDark}>
                <CardActionArea className="card-area">
                  <div className="image-container">
                    <img src={card.image} alt={card.description} />
                  </div>
                  <CardContent className="card-content">
                    <>
                      <div className="description">{card.description}</div>
                      <div className="price">{card.price}</div>
                    </>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </NoDecorationLink>
          </Grid>
        ))}
      </GridList>
    </Container>
  );

  if (limit) {
    return innerContainer;
  }

  return <MainContainer $isMobile={isMobile}>{innerContainer}</MainContainer>;
};

const Container = styled(Grid)`
  margin-top: ${lgSpacing};
  margin-bottom: ${lgSpacing};
  display: block;

  .title {
    text-align: center;
  }
`;

type StyledCardProps = {
  $isDark: boolean;
};

const StyledCard = styled(Card)<StyledCardProps>`
  padding: ${xsSpacing};
  box-shadow: none;
  height: 100%;

  .card-area {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .image-container {
    height: 200px;
    width: 100%;
    display: flex;

    img {
      width: 100%;
      height: auto;
      object-fit: scale-down;
    }
  }

  .card-content {
    flex: 1;

    .description {
      font-family: "Odibee Sans", cursive;
      font-weight: 400;
      font-size: 20px;
      line-height: 22.16px;
      text-transform: uppercase;
    }

    .price {
      padding-top: 4px;
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => (props.$isDark ? lightBlack : darkGray)};
    }
  }
`;
