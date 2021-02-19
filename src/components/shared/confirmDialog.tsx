import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@12emake/design-system";

import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  open: boolean;
  handleClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  onCancel: () => void;
  onConfirm: () => void;
  content?: string;
  title?: string;
};

export const ConfirmDialog: React.FunctionComponent<Props> = ({
  open,
  handleClose,
  onCancel,
  onConfirm,
  content,
  title,
}) => {
  const [t] = useTranslation();

  return (
    <Dialog open={open} onClose={handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onCancel}>
          {t("cancel")}
        </Button>
        <Button color="secondary" onClick={onConfirm} autoFocus>
          {t("confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
