import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "@ui/Typography";
import { ContentContainer, HeaderContent } from "@ui/Container";
import { useGetAllPostsRequest } from "@requests/postRequests";
import { Button, List, Skeleton, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "@constants/routes";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MyTrips = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetAllPostsRequest();

  const descriptionFormatter = (city: string, date: Date) => {
    const dateFormatted = new Date(date).toLocaleDateString("pt-BR");
    return `${t("list.city")} ${city}, ${t("list.createAt")}  ${dateFormatted}`;
  };

  const goToAddPage = () => {
    navigate(DASHBOARD_ROUTES.CREATE);
  };

  return (
    <PrivateLayout>
      <ContentContainer>
        <HeaderContent>
          <H2 variation="thin">{t("menu.list")}</H2>
          <Button type="primary" onClick={goToAddPage}>
            {t("add")}
          </Button>
        </HeaderContent>
        {isLoading && <Skeleton paragraph={{ rows: 1 }} active />}
        {isSuccess && data?.length > 0 && (
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <IconText
                    icon={DeleteOutlined}
                    text={t("delete")}
                    key="list-vertical-star-o"
                  />,
                ]}
              >
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
