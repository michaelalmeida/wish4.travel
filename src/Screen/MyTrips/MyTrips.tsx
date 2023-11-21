import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "@ui/Typography";
import { ContentContainer } from "@ui/Container";
import { useGetAllPostsRequest } from "@requests/postRequests";
import { List, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { DASHBOARD_ROUTES } from "@constants/routes";

const MyTrips = () => {
  const { t } = useTranslation();
  const { data, isLoading, isSuccess } = useGetAllPostsRequest();

  const descriptionFormatter = (city: string, date: Date) => {
    const dateFormatted = new Date(date).toLocaleDateString("pt-BR");
    return `${t("list.city")} ${city}, ${t("list.createAt")}  ${dateFormatted}`;
  };

  return (
    <PrivateLayout>
      <ContentContainer>
        <H2 variation="thin" marginBottom>
          {t("menu.list")}
        </H2>
        {isLoading && <Skeleton paragraph={{ rows: 1 }} active />}
        {isSuccess && data?.length > 0 && (
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  description={descriptionFormatter(
                    item.destination.city,
                    item.createdAt
                  )}
                  title={
                    <Link to={`${DASHBOARD_ROUTES.EDIT_POST_BASE}/${item.id}`}>
                      {item.title}
                    </Link>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </ContentContainer>
    </PrivateLayout>
  );
};

export default MyTrips;
