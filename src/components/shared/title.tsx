import React from "react";
import styled from "styled-components";

type TitleProps = {
  className?: string;
};

export const Title: React.FunctionComponent<TitleProps> = ({
  className,
  children,
}) => <StyledTitle className={className}>{children}</StyledTitle>;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  font-family: "Odibee Sans", cursive;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
