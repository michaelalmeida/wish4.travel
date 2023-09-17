import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";

import { H2 } from "../../Ui/Typography";
import { CreateContainer } from "./Create.style";
import { CreateHistoryForm } from "./CreateHistoryForm";

export const Create = () => {
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
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <PrivateLayout>
      <CreateContainer>
        <H2 variation="thin" marginBottom>
          {t("menu.create")}
        </H2>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </CreateContainer>
    </PrivateLayout>
  );
};
