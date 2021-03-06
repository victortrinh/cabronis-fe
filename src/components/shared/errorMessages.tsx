import { red100, red400 } from "../../common/colors";
import styled, { css } from "styled-components";

import { IconContext } from "react-icons/lib";
import { MdError } from "react-icons/md";
import React from "react";
import { useTheme } from "@12emake/design-system";

export const ErrorMessages: React.FC = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";

  return (
    <StyledErrorMessages $isDark={isDark}>
      <div className="icon">
        <IconContext.Provider value={{ color: red400, size: "20px" }}>
          <MdError />
        </IconContext.Provider>
      </div>
      {children}
    </StyledErrorMessages>
  );
};

type Props = {
  $isDark: boolean;
};

const StyledErrorMessages = styled.div<Props>`
  display: flex;
  text-align: left;
  margin-top: 24px;
  border-radius: 6px;
  background-color: ${red100};
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
