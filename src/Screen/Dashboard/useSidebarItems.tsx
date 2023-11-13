import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NumberCardProps } from "../../Components/Stats/NumberCard";
import { DASHBOARD_ROUTES } from "../../constants/routes";

export const useSidebarItems = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items: NumberCardProps[] = [
    {
      label: t("sidebar.articles"),
      number: 224,
      action: () => navigate(DASHBOARD_ROUTES.LIST),
      variant: "large",
    },
    {
      label: t("sidebar.countries"),
      number: 33,
      action: () => navigate(`${DASHBOARD_ROUTES.LIST}?status=finished`),
    },
    {
      label: t("sidebar.cities"),
      number: 43,
      action: () => navigate(`${DASHBOARD_ROUTES.LIST}?status=cancelled`),
    },
  ];

  return { items };
};
