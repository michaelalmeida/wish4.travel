import React from "react";
import { Alert, Button, Form, Input, Select } from "antd";

import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "../../Ui/Typography";
import { useTranslation } from "react-i18next";
import { ContentContainer } from "../../Ui/Container";

const { Option } = Select;

export const Profile = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <PrivateLayout>
      <ContentContainer>
        <H2 variation="thin" marginBottom>
          {t("menu.profile.edit")}
        </H2>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ width: "100%" }}
          scrollToFirstError
          layout="vertical"
        >
          <Form.Item
            name="name"
            label={t("form.name")}
            rules={[
              {
                required: true,
                message: t("form.error.required"),
              },
            ]}
          >
            <Input placeholder={t("form.name")} />
          </Form.Item>
          <Alert
            message={t("form.username.help")}
            type="info"
            showIcon
            style={{ marginBottom: 10 }}
          />

          <Form.Item
            name="username"
            label={t("form.username")}
            rules={[
              {
                required: true,
                message: t("form.error.required"),
              },
            ]}
          >
            <Input addonBefore="http://wish4.travel/" defaultValue="mysite" />
          </Form.Item>

          <Form.Item
            name="language"
            rules={[{ message: t("form.error.required") }]}
            label={t("form.language")}
          >
            <Select placeholder={t("form.language")}>
              <Option value="pt">{t("form.language.pt")}</Option>
              <Option value="en">{t("form.language.en")}</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={false}>
              {t("save")}
            </Button>
          </Form.Item>
        </Form>
      </ContentContainer>
    </PrivateLayout>
  );
};
