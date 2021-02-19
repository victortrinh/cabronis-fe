import { useMediaQuery, useTheme } from "@12emake/design-system";

import React from "react";
import styled from "styled-components";

type TitleProps = {
  className?: string;
  showTitle?: boolean;
};

export const Title: React.FunctionComponent<TitleProps> = ({
  className,
  children,
  showTitle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (showTitle) {
    return <StyledTitle className={className}>{children}</StyledTitle>;
  }

  return isMobile ? null : (
    <StyledTitle className={className}>{children}</StyledTitle>
  );
};

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
