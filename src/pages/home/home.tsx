import {
  Button,
  Grid,
  Hidden,
  useMediaQuery,
  useTheme,
} from "@12emake/design-system";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import { MainContainer } from "../../components/shared/mainContainer";
import { NoDecorationLink } from "../../components/shared/noDecorationLink";
import { Payment } from "../../components/shared/payment";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { RootState } from "../../rootState";
import { Shop } from "./shop";
import { TwitchSwitch } from "../../components/shared/twitchSwitch";
import { defaultBoxShadow } from "../../common/colors";
import shop from "../../routes/pages/shop";
import { smSpacing } from "../../common/spacing";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation();
  const POKEMON_TWITCH_CHANNEL_NAME = "PSC_Chato";
  const BASKETBALL_TWITCH_CHANNEL_NAME = "psc_rey";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.type === "dark";

  const { isPokemon } = useSelector((state: RootState) => ({
    isPokemon: state.appContext.isPokemon,
  }));

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
      <TwitchSwitch />
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
      <div className="payment">
        <Payment />
      </div>
      <Shop limit={12} title={t("featured")} />
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

type StyledMainContainerProps = {
  $isMobile?: boolean;
};

const StyledMainContainer = styled(MainContainer)<StyledMainContainerProps>`
  .payment {
    display: flex:
    justify-content: center;
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

      .twitch-container {
        margin-top: 8px;
        height: calc(
          100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 150px
        );
      }
    `}
`;

export default Home;
