import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "@ui/Typography";
import { ContentContainer, HeaderContent } from "@ui/Container";
import { useGetAllPostsRequest } from "@requests/postRequests";
import { Button, List, Skeleton, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "@constants/routes";
import { DeleteOutlined, RedoOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useArchivePostRequest } from "@requests/postRequests/useArchivePostRequest";

const IconText = ({
  icon,
  text,
  onClick,
}: {
  icon: React.FC;
  text: string;
  onClick: () => void;
}) => (
  <Space onClick={onClick} style={{ cursor: "pointer" }}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MyTrips = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useGetAllPostsRequest();
  const { mutate, isSuccess: archivePostSuccess } = useArchivePostRequest();

  const descriptionFormatter = (city: string, date: Date) => {
    const dateFormatted = new Date(date).toLocaleDateString("pt-BR");
    return `${t("list.city")} ${city}, ${t("list.createAt")}  ${dateFormatted}`;
  };

  const goToAddPage = () => {
    navigate(DASHBOARD_ROUTES.CREATE);
  };

  useEffect(() => {
    if (archivePostSuccess) {
      refetch();
    }
  }, [archivePostSuccess]);

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
                style={item.archived ? { opacity: 0.5 } : {}}
                actions={[
                  item.archived ? (
                    <IconText
                      icon={RedoOutlined}
                      text={t("restore")}
                      key="restore"
                      onClick={() => mutate(item.id)}
                    />
                  ) : (
                    <IconText
                      icon={DeleteOutlined}
                      text={t("delete")}
                      key="arhive"
                      onClick={() => mutate(item.id)}
                    />
                  ),
                ]}
              >
                <List.Item.Meta
                  description={descriptionFormatter(
                    item.destination.city,
                    item.createdAt
                  )}
                  title={
                    item.archived ? (
                      item.title
                    ) : (
                      <Link
                        to={`${DASHBOARD_ROUTES.EDIT_POST_BASE}/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    )
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
