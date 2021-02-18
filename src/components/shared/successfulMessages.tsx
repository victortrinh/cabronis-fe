import { green100, green400 } from "../../common/colors";
import styled, { css } from "styled-components";

import { FaThumbsUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React from "react";
import { useTheme } from "@12emake/design-system";

export const SuccessfulMessages: React.FC = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";

  return (
    <StyledSuccessfulMessages $isDark={isDark}>
      <div className="icon">
        <IconContext.Provider value={{ color: green400, size: "20px" }}>
          <FaThumbsUp />
        </IconContext.Provider>
      </div>
      {children}
    </StyledSuccessfulMessages>
  );
};

type Props = {
  $isDark: boolean;
};

const StyledSuccessfulMessages = styled.div<Props>`
  display: flex;
  text-align: left;
  margin-top: 24px;
  border-radius: 6px;
  background-color: ${green100};
  padding: 10px;
  margin-bottom: 30px;

  .icon {
    margin-right: 8px;
    display: flex;
    align-items: flex-start;
  }

  ${(props) =>
    props.$isDark &&
    css`
      color: black;
    `}
`;
