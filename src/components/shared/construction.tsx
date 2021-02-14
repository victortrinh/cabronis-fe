import { IconContext } from "react-icons/lib";
import { IoIosConstruct } from "react-icons/io";
import { MainContainer } from "./mainContainer";
import React from "react";
import { lgSpacing } from "../../common/spacing";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Construction: React.FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <MainContainer $verticalCentered $horizontalCentered>
      <Container>
        <div className="title">{t("under-construction-title")}</div>
        <div className="text">{t("under-construction-text")}</div>
        <IconContext.Provider value={{ size: "4rem" }}>
          <IoIosConstruct />
        </IconContext.Provider>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  text-align: center;

  .title {
    font-family: "Odibee Sans", cursive;
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .text {
    font-size: 30px;
    margin-bottom: ${lgSpacing};
  }
`;
