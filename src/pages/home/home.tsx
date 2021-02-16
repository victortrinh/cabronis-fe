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
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { Shop } from "./shop";
import { defaultBoxShadow } from "../../common/colors";
import { lgSpacing } from "../../common/spacing";
import shop from "../../routes/pages/shop";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation();
  const TWITCH_CHANNEL_NAME = "PSC_Chato";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.type === "dark";

  useEffect(() => {
    const iframe = document.querySelector("iframe");
    iframe?.setAttribute("allow", "fullscreen");
    iframe?.setAttribute("allowFullScreen", "");
  }, []);

  return (
    <StyledMainContainer $horizontalCentered $isMobile={isMobile}>
      <Grid
        className="twitch-container"
        container
        justify="center"
        alignItems="center"
      >
        <Hidden smDown>
          <ReactTwitchEmbedVideo
            allowfullscreen={true}
            channel={TWITCH_CHANNEL_NAME}
            width="100%"
            height="100%"
            theme={isDark ? "dark" : "light"}
            muted={true}
          />
        </Hidden>
        <Hidden mdUp>
          <ReactTwitchEmbedVideo
            allowfullscreen={false}
            channel={TWITCH_CHANNEL_NAME}
            width="100%"
            height="100%"
            theme={isDark ? "dark" : "light"}
            muted={true}
          />
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

type StyledMainContainerProps = {
  $isMobile?: boolean;
};

const StyledMainContainer = styled(MainContainer)<StyledMainContainerProps>`
  .twitch-container {
    margin-top: ${lgSpacing};
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

      .twitch-container {
        margin-top: 0;
        height: 75vh;
      }
    `}
`;

export default Home;
