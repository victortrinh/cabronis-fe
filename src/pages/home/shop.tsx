import {
  Card,
  CardContent,
  Grid,
  GridList,
  Input,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import React, { ChangeEvent, useState } from "react";
import { darkGray, lightBlack, minimalBoxShadow } from "../../common/colors";
import { lgSpacing, xsSpacing } from "../../common/spacing";
import styled, { css } from "styled-components";

import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import { Price } from "../../components/shared/price";
import { RootState } from "../../rootState";
import { Title } from "../../components/shared/title";
import { TwitchSwitch } from "../../components/shared/twitchSwitch";
import { cards } from "../../hardcode/cards";
import faq from "../../routes/pages/faq";
import item from "../../routes/pages/item";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

type Props = {
  limit?: number;
  title?: string;
};

export const Shop: React.FunctionComponent<Props> = ({ limit, title }) => {
  const { isPokemon } = useSelector((state: RootState) => ({
    isPokemon: state.appContext.isPokemon,
  }));
  const [t] = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [searchTerm, setSearchTerm] = useState<string>();

  const getColumns = () => {
    if (isMobile) {
      return 2;
    }

    if (isTablet) {
      return 3;
    }

    return 4;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setSearchTerm(text);
  };

  const innerContainer = (
    <Container
      $isMobile={isMobile}
      container
      justify="center"
      alignItems="center"
    >
      {(limit || !isMobile) && (
        <Title showTitle className="title">
          {title || t("shop")}
        </Title>
      )}
      {!limit && <TwitchSwitch />}
      {!limit && (
        <div className="search">
          <Input
            autoComplete="nope"
            color="secondary"
            type="text"
            label={t("search")}
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </div>
      )}
      <GridList
        className="card-list"
        cellHeight="auto"
        cols={getColumns()}
        spacing={20}
      >
        {cards
          .filter((x) =>
            isPokemon ? x.theme === "pokemon" : x.theme !== "pokemon"
          )
          .filter((x) =>
            searchTerm
              ? x.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
              : x
          )
          .slice(0, limit)
          .map((card) => (
            <Grid className="card" key={card.sellable_id}>
              <NoDecorationLink to={`/${item.key}/${card.sellable_id}`}>
                <StyledCard $isDark={isDark}>
                  <div className="image-container">
                    <img
                      data-sizes="auto"
                      data-src={card.image_path}
                      className="lazyload"
                      alt={card.name}
                    />
                  </div>
                  <CardContent className="card-content">
                    <>
                      <div className="description">{card.name}</div>
                      <div className="price">
                        <Price value={card.price} />
                      </div>
                    </>
                  </CardContent>
                </StyledCard>
              </NoDecorationLink>
            </Grid>
          ))}
        <Grid className="card">
          <NoDecorationLink to={`/${faq.key}`}>
            <StyledCard $isDark={isDark}>
              <div className="image-container">
                <img
                  data-sizes="auto"
                  data-src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  className="lazyload"
                  alt="Shipping"
                />
              </div>
              <CardContent className="card-content">
                <div className="description">Shipping</div>
              </CardContent>
            </StyledCard>
          </NoDecorationLink>
        </Grid>
      </GridList>
    </Container>
  );

  if (limit) {
    return innerContainer;
  }

  return <MainContainer $isMobile={isMobile}>{innerContainer}</MainContainer>;
};

type ContainerProps = {
  $isMobile: boolean;
};

const Container = styled(Grid)<ContainerProps>`
  margin-top: ${lgSpacing};
  margin-bottom: ${lgSpacing};
  display: block;

  .title {
    text-align: center;
  }

  .search {
    margin-top: 12px;
    margin-bottom: 32px;
  }

  ${(props) =>
    props.$isMobile &&
    css`
      .search {
        margin-top: 0;
      }
    `}
`;

type StyledCardProps = {
  $isDark: boolean;
};

const StyledCard = styled(Card)<StyledCardProps>`
  padding: ${xsSpacing};
  box-shadow: none;
  height: 100%;

  :hover {
    box-shadow: ${minimalBoxShadow};
  }

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
    text-align: center;

    .description {
      font-weight: 700;
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
