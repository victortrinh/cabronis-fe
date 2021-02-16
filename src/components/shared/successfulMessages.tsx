import { green100, green400 } from "../../common/colors";

import { FaThumbsUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React from "react";
import styled from "styled-components";

export const SuccessfulMessages: React.FC = ({ children }) => (
  <StyledSuccessfulMessages>
    <div className="icon">
      <IconContext.Provider value={{ color: green400, size: "20px" }}>
        <FaThumbsUp />
      </IconContext.Provider>
    </div>
    {children}
  </StyledSuccessfulMessages>
);

const StyledSuccessfulMessages = styled.div`
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
`;
