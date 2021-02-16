import { red100, red400 } from "../../common/colors";

import { IconContext } from "react-icons/lib";
import { MdError } from "react-icons/md";
import React from "react";
import styled from "styled-components";

export const ErrorMessages: React.FC = ({ children }) => (
  <StyledErrorMessages>
    <div className="icon">
      <IconContext.Provider value={{ color: red400, size: "20px" }}>
        <MdError />
      </IconContext.Provider>
    </div>
    {children}
  </StyledErrorMessages>
);

const StyledErrorMessages = styled.div`
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
`;
