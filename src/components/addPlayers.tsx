import { Input } from "@12emake/design-system";
import React from "react";
import { useTranslation } from "react-i18next";

export const AddPlayers: React.FC = () => {
  const [t] = useTranslation();

  return (
    <>
      <h2>{t("Add players")}</h2>
      <>
        <Input variant="outlined" label="name" />
      </>
    </>
  );
};
