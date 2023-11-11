import { Alert, Button, Form, Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { useUserLogin } from "../../../Hooks/useUser";

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation();
  const { error, login, loading, errorMessageHandler } = useUserLogin();

  const onFinish = ({ email, password }: LoginFormValues) => {
    login({ email, password });
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: "100%" }}
    >
      {error && (
        <Form.Item>
          <Alert
            message={errorMessageHandler(error)}
            type="error"
            showIcon
            closable
          />
        </Form.Item>
      )}

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: t("form.error.email.notValid"),
          },
          {
            required: true,
            message: t("form.error.required"),
          },
        ]}
      >
        <Input placeholder={t("form.email") as string} size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: t("form.error.required") }]}
      >
        <Input.Password placeholder={t("form.password")} size="large" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} noStyle>
        <Button type="primary" htmlType="submit" loading={loading}>
          {t("login")}
        </Button>
        <Link to={`../${ROUTES.REGISTER}`}>
          <Button type="link"> {t("signUp")}</Button>
        </Link>
      </Form.Item>
    </Form>
  );
};
