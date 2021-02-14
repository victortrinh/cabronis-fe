import { Link, LinkProps } from "react-router-dom";

import React from "react";
import styled from "styled-components";

export const NoDecorationLink: React.FunctionComponent<LinkProps> = (props) => (
  <StyledLink {...props} />
);

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  .MuiButton-label {
    font-family: "Odibee Sans", cursive;
    font-size: 16px;
  }

  .MuiListItemText-root,
  .MuiTypography-root,
  .MuiListItemText-primary,
  .MuiTypography-body1,
  .MuiTypography-displayBlock {
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;

    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;
