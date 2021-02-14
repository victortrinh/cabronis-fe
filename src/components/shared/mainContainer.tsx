import styled, { css } from "styled-components";

import { Container } from "@12emake/design-system";
import { ContainerProps } from "@12emake/design-system/dist/components/layout/container";
import React from "react";

export const MainContainer: React.FunctionComponent<
  ContainerProps & StyledContainerProps
> = (props) => <StyledContainer {...props} />;

type StyledContainerProps = {
  $verticalCentered?: boolean;
  $horizontalCentered?: boolean;
  $isMobile?: boolean;
};

const StyledContainer = styled(Container)<StyledContainerProps>`
  width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;

  ${(props) =>
    props.$verticalCentered &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.$horizontalCentered &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.$isMobile &&
    css`
      height: 100vh;
      overflow: auto;
    `}
`;
