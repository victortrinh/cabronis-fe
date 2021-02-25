import { Grid, Snackbar } from "@12emake/design-system";
import React, { MouseEvent, useState } from "react";

import { lightBlack } from "../../common/colors";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Payment: React.FunctionComponent = () => {
  const [t] = useTranslation();
  const PAYPAL_LOGO = "paypal.png";
  const ETRANSFER_LOGO = "e-transfer.png";
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState<string>();

  const copyToClipboard = (e: MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.textContent;
    if (text) {
      setCopiedMessage(text);
      navigator.clipboard.writeText(text);
      setOpenSnackbar(true);
    }
  };

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
            data-src={`${process.env.PUBLIC_URL}/${PAYPAL_LOGO}`}
            className="lazyload"
            width="80px"
            height="auto"
            alt="Paypal"
          />
          paypal.me/PSCChato
        </a>
        <div className="payment-subtitle">{t("pay-by-interac")}</div>
        <div className="e-transfer link" onClick={copyToClipboard}>
          <img
            data-sizes="auto"
            data-src={`${process.env.PUBLIC_URL}/${ETRANSFER_LOGO}`}
            className="lazyload"
            width="80px"
            height="auto"
            alt="Paypal"
          />
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
            data-sizes="auto"
            data-src={`${process.env.PUBLIC_URL}/${PAYPAL_LOGO}`}
            className="lazyload"
            width="80px"
            height="auto"
            alt="Paypal"
          />
          paypal.me/R3yElvis
        </a>
        <div className="payment-subtitle">{t("pay-by-interac")}</div>
        <div className="e-transfer link" onClick={copyToClipboard}>
          <img
            data-sizes="auto"
            data-src={`${process.env.PUBLIC_URL}/${ETRANSFER_LOGO}`}
            className="lazyload"
            width="80px"
            height="auto"
            alt="Paypal"
          />
          elvis_reynoso@hotmail.ca
        </div>
      </div>
    </Grid>
  );

  return (
    <StyledPayment container>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={`${t("copied")} "${copiedMessage}" ${t("to-clipboard")}`}
      />
      {pokemon}
      {sports}
    </StyledPayment>
  );
};

const StyledPayment = styled(Grid)`
  .payment-title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22px;
    border-bottom: 1px solid ${lightBlack};
    padding-bottom: 12px;
  }

  .payment-subtitle {
    margin: 12px 0;
    font-weight: 600;
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
    cursor: pointer;

    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: inherit;
    }

    img {
      margin-right: 18px;
    }
  }

  a {
    display: block;
    margin-bottom: 20px;
  }
`;
