import { Link, LinkProps } from "react-router-dom";

import React from "react";
import styled from "styled-components";

export const NoDecorationLink: React.FunctionComponent<LinkProps> = (props) => (
  <StyledLink {...props} />
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white !important;
`;
