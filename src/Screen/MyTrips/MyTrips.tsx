import React from "react";
import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "../../Ui/Typography";
import { ContentContainer } from "../../Ui/Container";

export const MyTrips = () => {
  const { t } = useTranslation();

  return (
    <PrivateLayout>
      <ContentContainer>
        <H2 variation="thin" marginBottom>
          {t("menu.list")}
        </H2>
      </ContentContainer>
    </PrivateLayout>
  );
};
