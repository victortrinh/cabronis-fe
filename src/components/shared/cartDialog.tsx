import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@12emake/design-system";

import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  open: boolean;
  handleClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
};

export const CartDialog: React.FunctionComponent<Props> = ({
  open,
  handleClose,
}) => {
  const [t] = useTranslation();
  const history = useHistory();

  const handleClick = (path: string) => () => {
    history.push(path);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        {t("added-to-cart-title")}
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontWeight: 700 }}>
          {t("added-to-cart-content")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleClick(`/shop`)}
        >
          {t("continue-shopping")}
        </Button>
        <Button color="secondary" onClick={handleClick(`/cart`)} autoFocus>
          {t("go-to-cart")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
