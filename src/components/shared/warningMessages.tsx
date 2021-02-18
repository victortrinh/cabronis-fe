import styled, { css } from "styled-components";
import { yellow100, yellow400 } from "../../common/colors";

import { AiOutlineWarning } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import React from "react";
import { useTheme } from "@12emake/design-system";

export const WarningMessages: React.FC = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.type === "dark";

  return (
    <StyledWarningMessages $isDark={isDark}>
      <div className="icon">
        <IconContext.Provider value={{ color: yellow400, size: "20px" }}>
          <AiOutlineWarning />
        </IconContext.Provider>
      </div>
      {children}
    </StyledWarningMessages>
  );
};

type Props = {
  $isDark: boolean;
};

const StyledWarningMessages = styled.div<Props>`
  display: flex;
  text-align: left;
  margin-top: 24px;
  border-radius: 6px;
  background-color: ${yellow100};
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
