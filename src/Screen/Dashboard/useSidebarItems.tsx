import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NumberCardProps } from "../../Components/Stats/NumberCard";
import { DASHBOARD_ROUTES } from "../../constants/routes";

export const useSidebarItems = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items: NumberCardProps[] = [
    {
      label: t("sidebar.quotation"),
      number: 3333,
      action: () => navigate(DASHBOARD_ROUTES.QUOTATION_LIST),
      variant: "large",
    },
    {
      label: t("sidebar.in_progress"),
      number: 33,
      action: () =>
        navigate(`${DASHBOARD_ROUTES.QUOTATION_LIST}?status=in_progress`),
    },
    {
      label: t("sidebar.finished"),
      number: 33,
      action: () =>
        navigate(`${DASHBOARD_ROUTES.QUOTATION_LIST}?status=finished`),
    },
    {
      label: t("sidebar.cancelled"),
      number: 0,
      action: () =>
        navigate(`${DASHBOARD_ROUTES.QUOTATION_LIST}?status=cancelled`),
    },
  ];

  return { items };
};
