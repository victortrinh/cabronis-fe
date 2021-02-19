import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Payment: React.FunctionComponent = () => {
  const [t] = useTranslation();
  const PAYPAL_LOGO = "paypal.svg";
  const ETRANSFER_LOGO = "e-transfer.png";

  return (
    <StyledPayment>
      <div className="first-column">
        <div className="payment-title">{t("pokemon")}</div>
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
          />
        </a>
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
      <div>
        <div className="payment-title">{t("basketball")}</div>
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
          />
        </a>
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
    </StyledPayment>
  );
};

const StyledPayment = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  font-weight: bold;

  .payment-title {
    font-family: "Odibee Sans", cursive;
    text-transform: uppercase;
    font-size: 22px;
  }

  .first-column {
    margin-right: 30px;
  }

  .e-transfer {
    display: flex;
    align-items: center;
  }

  .link {
    margin-top: 20px;
  }

  a {
    display: block;
  }
`;
