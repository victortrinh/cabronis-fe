import { Switch, useMediaQuery, useTheme } from "@12emake/design-system";
import { orange400, red400 } from "../../common/colors";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { BiBasketball } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import React from "react";
import { RootState } from "../../rootState";
import { setIsPokemon } from "../../contexts/appContext/actions";
import { useTranslation } from "react-i18next";

export const TwitchSwitch = () => {
  const theme = useTheme();
  const [t] = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { isPokemon } = useSelector((state: RootState) => ({
    isPokemon: state.appContext.isPokemon,
  }));

  return (
    <Container
      $backgroundColor={theme.palette.secondary.main}
      $isMobile={isMobile}
    >
      {!isMobile && t("pokemon")}
      <IconContext.Provider
        value={{
          size: "25px",
          color: isPokemon ? red400 : undefined,
          style: { marginLeft: "8px" },
        }}
      >
        <CgPokemon />
      </IconContext.Provider>
      <Switch
        checked={!isPokemon}
        onChange={() => {
          dispatch(setIsPokemon(!isPokemon));
        }}
      />
      <IconContext.Provider
        value={{
          size: "22px",
          color: !isPokemon ? orange400 : undefined,
          style: { marginRight: "8px" },
        }}
      >
        <BiBasketball />
      </IconContext.Provider>
      {!isMobile && t("basketball")}
    </Container>
  );
};

type StyledSwitchProps = {
  $backgroundColor: string;
  $isMobile: boolean;
};

const Container = styled.div<StyledSwitchProps>`
  font-size: 20px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;

  .MuiSwitch-thumb {
    background-color: ${(props) => props.$backgroundColor};
  }

  ${(props) =>
    props.$isMobile &&
    css`
      margin-top: 0;
      position: absolute;
      right: 12px;
      top: calc(env(safe-area-inset-top) + 10px);
      z-index: 99999;
    `}
`;
