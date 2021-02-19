import { Grid } from "@12emake/design-system";
import React from "react";
import { lightBlack } from "../../common/colors";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Payment: React.FunctionComponent = () => {
  const [t] = useTranslation();
  const PAYPAL_LOGO = "paypal.svg";
  const ETRANSFER_LOGO = "e-transfer.png";

  const pokemon = (
    <Grid item xs={12} sm={12} md={6}>
      <div className="payment-row">
        <div className="payment-title">{t("pokemon")}</div>
        <div className="payment-subtitle">{t("pay-by-paypal")}</div>
        <a
          className="link"
          target="_blank"
          href="https://paypal.me/PSCChato"
          rel="noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/${PAYPAL_LOGO}`}
            alt="Paypal"
            width="80px"
            height="auto"
          />{" "}
          https://paypal.me/PSCChato
        </a>
        <div className="payment-subtitle">{t("pay-by-interac")}</div>
        <div className="e-transfer link">
          <img
            src={`${process.env.PUBLIC_URL}/${ETRANSFER_LOGO}`}
            alt="Paypal"
            width="80px"
            height="auto"
          />{" "}
          paulmechato01_2@hotmail.com
        </div>
      </div>
    </Grid>
  );

  const sports = (
    <Grid item xs={12} sm={12} md={6}>
      <div className="payment-row">
        <div className="payment-title">{t("basketball")}</div>
        <div className="payment-subtitle">{t("pay-by-paypal")}</div>
        <a
          className="link"
          target="_blank"
          href="https://paypal.me/R3yElvis"
          rel="noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/${PAYPAL_LOGO}`}
            alt="Paypal"
            width="80px"
            height="auto"
          />{" "}
          https://paypal.me/R3yElvis
        </a>
        <div className="payment-subtitle">{t("pay-by-interac")}</div>
        <div className="e-transfer link">
          <img
            src={`${process.env.PUBLIC_URL}/${ETRANSFER_LOGO}`}
            alt="Paypal"
            width="80px"
            height="auto"
          />{" "}
          elvis_reynoso@hotmail.ca
        </div>
      </div>
    </Grid>
  );

  return (
    <StyledPayment container>
      {pokemon}
      {sports}
    </StyledPayment>
  );
};

const StyledPayment = styled(Grid)`
  .payment-title {
    font-family: "Odibee Sans", cursive;
    text-transform: uppercase;
    font-size: 22px;
    border-bottom: 1px solid ${lightBlack};
  }

  .payment-subtitle {
    margin: 12px 0;
    font-weight: 700;
  }

  .MuiGrid-item {
    padding: 20px;

    .payment-row {
      padding: 20px;
      border: 1px solid ${lightBlack};
    }
  }

  .e-transfer {
    display: flex;
    align-items: center;
  }

  .link {
    margin-top: 8px;
    display: flex;
    align-items: center;

    img {
      margin-right: 18px;
    }
  }

  a {
    display: block;
    margin-bottom: 20px;
  }
`;
