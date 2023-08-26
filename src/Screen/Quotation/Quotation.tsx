import React from "react";
import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";

export const Quotation = () => {
  const { t } = useTranslation();

  return (
    <PrivateLayout>
      <p>{t("quotation")}</p>
    </PrivateLayout>
  );
};
