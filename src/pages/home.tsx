import styled, { css } from "styled-components";
import { useMediaQuery, useTheme } from "@12emake/design-system";

import { MainContainer } from "../components/shared/mainContainer";
import React from "react";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer $centered={!isMobile}>
      <StyledHomePage $isMobile={isMobile}>
        <h1>Home</h1>
      </StyledHomePage>
    </MainContainer>
  );
};

type StyledHomePageProps = {
  $isMobile?: boolean;
};

const StyledHomePage = styled.div<StyledHomePageProps>`
  ${(props) =>
    props.$isMobile &&
    css`
      flex: 1;
    `}
`;

export default Home;
