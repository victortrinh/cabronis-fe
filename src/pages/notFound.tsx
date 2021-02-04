import { Button } from "@12emake/design-system";
import { MainContainer } from "../components/shared/mainContainer";
import { NoDecorationLink } from "../components/shared/noDecorationLink";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const [t] = useTranslation();

  return (
    <MainContainer>
      <StyledNotFoundPage>
        <div className="title">404</div>
        <div className="text">{t("not-found")}</div>
        <NoDecorationLink to="/">
          <Button color="secondary">{t("go-back")}</Button>
        </NoDecorationLink>
      </StyledNotFoundPage>
    </MainContainer>
  );
};

const StyledNotFoundPage = styled.div`
  text-align: center;

  .text {
    font-size: 1.25rem;
    margin-bottom: 35px;
  }

  .title {
    font-size: 10rem;
    font-weight: 900;
  }
`;

export default NotFound;
