import React from "react";
import { red } from "../../common/colors";
import styled from "styled-components";

type FormProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: React.FunctionComponent<FormProps> = ({
  onSubmit,
  children,
}) => <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;

export const StyledForm = styled.form`
  width: 100%;

  .MuiInputBase-root {
    margin-bottom: 16px;
  }

  button {
    margin-top: 12px;
  }

  .errors {
    margin-top: -6px;
    margin-bottom: 12px;
    margin-left: 2px;
    text-align: left;
    font-size: 12px;
    color: ${red};
  }
`;
