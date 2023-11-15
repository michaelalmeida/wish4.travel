import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "@ui/Typography";
import { ContentContainer } from "@ui/Container";

const MyTrips = () => {
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

export default MyTrips;
