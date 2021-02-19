import { useMediaQuery, useTheme } from "@12emake/design-system";

import { MainContainer } from "../../components/shared/mainContainer";
import { Price } from "../../components/shared/price";
import React from "react";
import { Title } from "../../components/shared/title";
import { lightBlack } from "../../common/colors";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [t] = useTranslation();

  return (
    <Container $isMobile={isMobile}>
      <Title className="faq-title">FAQ</Title>
      <div className="subtitle">{t("shipping")}</div>
      <div className="information">{t("shipping-information")}</div>
      <table>
        <tr>
          <th>{t("type")}</th>
          <th>{t("price")}</th>
        </tr>
        <tr>
          <td>PWE</td>
          <td>
            <Price value={2} />
          </td>
        </tr>
        <tr>
          <td>Bubblemailer</td>
          <td>
            <Price value={4} />
          </td>
        </tr>
        <tr>
          <td>{t("tracked")}</td>
          <td>
            <Price value={15} />-<Price value={20} />
          </td>
        </tr>
      </table>
    </Container>
  );
};

export default Faq;

const Container = styled(MainContainer)`
  .faq-title {
    margin-top: 12px;
    text-align: center;
  }

  .subtitle {
    font-size: 1.1rem;
    font-weight: 700;
    padding-bottom: 8px;
    border-bottom: 1px solid ${lightBlack};
    margin-bottom: 8px;
  }

  .information {
    margin-bottom: 20px;
  }

  table {
    text-align: left;
  }

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 15px;
  }
`;
