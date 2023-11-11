import React, { useEffect } from "react";
import { Alert, Button, Form, Input, Select, Skeleton } from "antd";
import { toast } from "react-toastify";

import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "../../Ui/Typography";
import { useTranslation } from "react-i18next";
import { ContentContainer } from "../../Ui/Container";
import { useUserCookie } from "../../Hooks/useUser";
import { useUserRequests } from "../../requests/userRequests/useUserRequests";

const { Option } = Select;

export const Profile = () => {
  const { t } = useTranslation();
  const { userId } = useUserCookie();
  const { getUserInfoMutation, updateUserInfoMutation } = useUserRequests();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    updateUserInfoMutation.mutate({
      ...values,
      uid: userId,
    });
  };

  useEffect(() => {
    getUserInfoMutation.mutate(userId);
  }, []);

  useEffect(() => {
    if (updateUserInfoMutation.isSuccess) {
      toast.success(t("app.update"));
    }
  }, [updateUserInfoMutation.isSuccess]);

  return (
    <PrivateLayout>
      <ContentContainer>
        <H2 variation="thin" marginBottom>
          {t("menu.profile.edit")}
        </H2>
        {getUserInfoMutation.isSuccess ? (
          <>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              style={{ width: "100%" }}
              scrollToFirstError
              layout="vertical"
              initialValues={{
                name: getUserInfoMutation.data.firstName,
                username: getUserInfoMutation.data.username,
                language: getUserInfoMutation.data.language,
              }}
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
                <Input addonBefore="http://wish4.travel/" />
              </Form.Item>

              <Form.Item
                name="language"
                rules={[{ message: t("form.error.required") }]}
                label={t("form.language")}
              >
                <Select placeholder={t("form.language")}>
                  <Option value="pt_BR">{t("form.language.pt")}</Option>
                  <Option value="en_US">{t("form.language.en")}</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={false}>
                  {t("save")}
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <Skeleton active />
        )}
      </ContentContainer>
    </PrivateLayout>
  );
};
