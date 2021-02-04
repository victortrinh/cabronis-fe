import styled, { css } from "styled-components";

import { AddPlayers } from "./addPlayers";
import { Button } from "@12emake/design-system";
import ClearIcon from "@material-ui/icons/Clear";
import { DefaultButton } from "./shared/defaultButton";
import FlagIcon from "@material-ui/icons/Flag";
import { Game as GameType } from "../storage/game";
import { MainContainer } from "../components/shared/mainContainer";
import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useTranslation } from "react-i18next";

type GameProps = {
  game: GameType;
  resetGame: () => void;
  isMobile: boolean;
};

export const Game: React.FC<GameProps> = ({ game, isMobile, resetGame }) => {
  const [t] = useTranslation();

  return (
    <MainContainer>
      <StyledGamePage $isMobile={isMobile}>
        <h1>Game</h1>
        <br />
        <AddPlayers />
      </StyledGamePage>
      <StyledButtonGroup $isMobile={isMobile}>
        <DefaultButton
          color="secondary"
          fullWidth={isMobile}
          onClick={resetGame}
          size={isMobile ? "large" : "medium"}
          startIcon={<ClearIcon />}
        >
          {t("cancel-game")}
        </DefaultButton>
        {game.started ? (
          <Button
            color="secondary"
            fullWidth={isMobile}
            onClick={resetGame}
            size={isMobile ? "large" : "medium"}
            startIcon={<RefreshIcon />}
          >
            {t("reset-game")}
          </Button>
        ) : (
          <DefaultButton
            color="primary"
            fullWidth={isMobile}
            onClick={resetGame}
            size={isMobile ? "large" : "medium"}
            startIcon={<FlagIcon />}
          >
            {t("start-game")}
          </DefaultButton>
        )}
      </StyledButtonGroup>
    </MainContainer>
  );
};

type StyledProps = {
  $isMobile: boolean;
};

const StyledGamePage = styled.div<StyledProps>`
  ${(props) =>
    props.$isMobile &&
    css`
      flex: 1;
    `}
`;

const StyledButtonGroup = styled.div<StyledProps>`
  padding: 30px 0;

  ${(props) =>
    !props.$isMobile &&
    css`
      display: flex;
      justify-content: center;

      button:last-child {
        margin-left: 20px;
      }
    `}

  ${(props) =>
    props.$isMobile &&
    css`
      button:last-child {
        margin-top: 20px;
      }
    `}
`;
