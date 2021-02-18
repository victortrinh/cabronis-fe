import {
  Button,
  Grid,
  Hidden,
  Switch,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import React, { useEffect, useState } from "react";
import { isPokemonStorage, setIsPokemonStorage } from "../../storage/cardType";
import styled, { css } from "styled-components";

import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { Shop } from "./shop";
import { defaultBoxShadow } from "../../common/colors";
import shop from "../../routes/pages/shop";
import { smSpacing } from "../../common/spacing";
import { useTranslation } from "react-i18next";
import { CgPokemon } from "react-icons/cg";
import { BiBasketball } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const Home = () => {
  const [t] = useTranslation();
  const POKEMON_TWITCH_CHANNEL_NAME = "PSC_Chato";
  const BASKETBALL_TWITCH_CHANNEL_NAME = "psc_rey";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.type === "dark";
  const [isPokemon, setIsPokemon] = useState(isPokemonStorage || true);

  useEffect(() => {
    const iframes = document.querySelectorAll("iframe");
    iframes?.forEach((iframe) => {
      iframe?.setAttribute("allow", "fullscreen");
      iframe?.setAttribute("allowFullScreen", "");
    });
  }, []);

  return (
    <StyledMainContainer
      disableGutters={isMobile}
      $horizontalCentered
      $isMobile={isMobile}
    >
      <div className="twitch-switch">
        {!isMobile && t("pokemon")}{" "}
        <IconContext.Provider value={{ size: "25px" }}>
          <CgPokemon />
        </IconContext.Provider>
        <StyledSwitch
          $backgroundColor={theme.palette.secondary.main}
          checked={!isPokemon}
          onChange={() => {
            setIsPokemonStorage(!isPokemon);
            setIsPokemon(!isPokemon);
          }}
        />
        <IconContext.Provider value={{ size: "22px" }}>
          <BiBasketball />
        </IconContext.Provider>{" "}
        {!isMobile && t("basketball")}
      </div>
      <Grid
        className="twitch-container"
        container
        justify="center"
        alignItems="center"
      >
        <Hidden smDown>
          {isPokemon ? (
            <ReactTwitchEmbedVideo
              allowfullscreen={true}
              channel={POKEMON_TWITCH_CHANNEL_NAME}
              width="100%"
              height="100%"
              theme={isDark ? "dark" : "light"}
              muted={true}
            />
          ) : (
            <ReactTwitchEmbedVideo
              allowfullscreen={true}
              channel={BASKETBALL_TWITCH_CHANNEL_NAME}
              width="100%"
              height="100%"
              theme={isDark ? "dark" : "light"}
              muted={true}
            />
          )}
        </Hidden>
        <Hidden mdUp>
          {isPokemon ? (
            <ReactTwitchEmbedVideo
              allowfullscreen={false}
              channel={POKEMON_TWITCH_CHANNEL_NAME}
              width="100%"
              height="100%"
              theme={isDark ? "dark" : "light"}
              muted={true}
            />
          ) : (
            <ReactTwitchEmbedVideo
              allowfullscreen={false}
              channel={BASKETBALL_TWITCH_CHANNEL_NAME}
              width="100%"
              height="100%"
              theme={isDark ? "dark" : "light"}
              muted={true}
            />
          )}
        </Hidden>
      </Grid>
      <Shop limit={8} title={t("featured")} />
      <div className="see-more">
        <NoDecorationLink to={shop.key}>
          <Button color={isDark ? "primary" : "secondary"}>
            {t("go-to-shop")}
          </Button>
        </NoDecorationLink>
      </div>
    </StyledMainContainer>
  );
};

type StyledSwitchProps = {
  $backgroundColor: string;
};

const StyledSwitch = styled(Switch)<StyledSwitchProps>`
  .MuiSwitch-thumb {
    background-color: ${(props) => props.$backgroundColor};
  }
`;

type StyledMainContainerProps = {
  $isMobile?: boolean;
};

const StyledMainContainer = styled(MainContainer)<StyledMainContainerProps>`
  .twitch-switch {
    font-family: "Odibee Sans", cursive;
    font-size: 20px;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
  }

  .twitch-container {
    margin-top: ${smSpacing};
    margin-bottom: 20px;
    box-shadow: ${defaultBoxShadow};
    height: 60vh;
  }

  .see-more {
    text-align: center;
  }

  ${(props) =>
    props.$isMobile &&
    css`
      height: 100vh;
      overflow: auto;
      padding-top: 0;

      .twitch-switch {
        margin-top: 0;
        position: absolute;
        right: 12px;
        top: calc(env(safe-area-inset-top) + 10px);
        z-index: 99999;
      }

      .twitch-container {
        margin-top: 0;
        height: calc(
          100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 150px
        );
      }
    `}
`;

export default Home;
