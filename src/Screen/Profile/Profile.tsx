import { useEffect } from "react";
import { Alert, Button, Form, Input, Select, Skeleton } from "antd";
import { toast } from "react-toastify";

import { PrivateLayout } from "../../Components/PrivateLayout";
import { H2 } from "@ui/Typography";
import { useTranslation } from "react-i18next";
import { ContentContainer, HeaderContent } from "@ui/Container";
import { useUserCookie } from "../../Hooks/useUser";
import { useUserRequests } from "../../requests";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../../constants/routes";

const { Option } = Select;

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { userId } = useUserCookie();
  const { getUserInfoMutation, updateUserInfoMutation } = useUserRequests();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const username = form.isFieldTouched("username")
      ? { username: values.username }
      : {};

    updateUserInfoMutation.mutate({
      uid: userId,
      firstName: values.firstName,
      language: values.language,
      ...username,
    });
  };

  useEffect(() => {
    getUserInfoMutation.mutate(userId);
  }, []);

  useEffect(() => {
    if (updateUserInfoMutation.isSuccess) {
      toast.success(t("app.update"));
      navigate(DASHBOARD_ROUTES.HOME);
    }
  }, [updateUserInfoMutation.isSuccess]);

  useEffect(() => {
    if (updateUserInfoMutation.isError) {
      const errorMessage =
        updateUserInfoMutation.error.message === "auth/username-already-exists"
          ? t("form.username.alreadyExists")
          : t("app.error");

      toast.error(errorMessage);
    }
  }, [updateUserInfoMutation.isError]);

  return (
    <PrivateLayout>
      <ContentContainer>
        <HeaderContent>
          <H2 variation="thin">{t("menu.profile.edit")}</H2>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => form.submit()}
            loading={updateUserInfoMutation.isLoading}
          >
            {t("save")}
          </Button>
        </HeaderContent>
        {getUserInfoMutation.isLoading && <Skeleton active />}
        {getUserInfoMutation.isSuccess && (
          <>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              style={{ width: "100%" }}
              scrollToFirstError
              layout="vertical"
              initialValues={{
                firstName: getUserInfoMutation.data.firstName,
                username: getUserInfoMutation.data.username,
                language: getUserInfoMutation.data.language,
              }}
            >
              <Form.Item
                name="firstName"
                label={t("form.name")}
                rules={[
                  {
                    required: true,
                    message: t("form.error.required"),
                  },
                  {
                    max: 20,
                    message: t("form.error.max", {
                      max: 20,
                    }),
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
                  {
                    max: 20,
                    message: t("form.error.max", {
                      max: 20,
                    }),
                  },
                ]}
              >
                <Input addonBefore="http://viajei.blog/" />
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
            </Form>
          </>
        )}
      </ContentContainer>
    </PrivateLayout>
  );
};

export default Profile;
