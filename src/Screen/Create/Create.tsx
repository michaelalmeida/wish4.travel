import React, { useRef } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";

import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";

import { H2 } from "../../Ui/Typography";
import { CreateHistoryForm } from "./CreateHistoryForm";
import { ContentContainer, HeaderContent } from "../../Ui/Container";
import { AditionalInforForm } from "./CreateHistoryForm/AditionalInfoForm";

const Create = () => {
  const { t } = useTranslation();

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Informações básicas",
      children: <CreateHistoryForm />,
    },
    {
      key: "2",
      label: "Informações adicionais",
      children: <AditionalInforForm />,
    },
  ];

  return (
    <PrivateLayout>
      <ContentContainer>
        <HeaderContent>
          <H2 variation="thin">{t("menu.create")}</H2>
          <Button type="primary">Salvar</Button>
        </HeaderContent>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="large"
        />
      </ContentContainer>
    </PrivateLayout>
  );
};

export default Create;
