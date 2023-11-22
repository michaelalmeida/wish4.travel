import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "@ui/Typography";
import { ContentContainer } from "@ui/Container";

const Setup = () => {
  const { t } = useTranslation();

  return (
    <PrivateLayout>
      <ContentContainer>
        <H2 variation="thin" marginBottom>
          {t("menu.configuration")}
        </H2>
        {t("settings.noAvailable")}
      </ContentContainer>
    </PrivateLayout>
  );
};

export default Setup;
