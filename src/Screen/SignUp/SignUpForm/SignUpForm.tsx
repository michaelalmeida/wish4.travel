import { Alert, Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useUserCreation } from "../../../Hooks/useUser";

const { Option } = Select;

interface UserSignUpProps {
  agreement: boolean;
  email: string;
  language?: string;
  password: string;
  name: string;
}

interface SignUpFormProps {
  setCompleted: (completed: boolean) => void;
}

export const SignUpForm = ({ setCompleted }: SignUpFormProps) => {
  const DEFAULT_LANGUAGE = "pt_BR";
  const { t } = useTranslation();
  const { createUser, loading, user, errorMessage } = useUserCreation();

  const [form] = Form.useForm();

  const onFinish = (values: UserSignUpProps) => {
    createUser({
      email: values.email,
      password: values.password,
      firstName: values.name,
      language: values.language || DEFAULT_LANGUAGE,
    });
  };

  if (user) {
    setCompleted(true);
  }

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ width: "100%" }}
      scrollToFirstError
    >
      {errorMessage == "auth/email-already-exists" && (
        <Form.Item>
          <Alert
            message={t("form.error.email.alreadyExists")}
            type="error"
            showIcon
            closable
          />
        </Form.Item>
      )}

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: t("form.error.required"),
          },
        ]}
      >
        <Input placeholder={t("form.name")} />
      </Form.Item>

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
        <Input placeholder={t("form.email")} />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t("form.error.required"),
            },
            {
              min: 8,
              message: t("form.error.password.min"),
            },
          ]}
          hasFeedback
          style={{
            display: "inline-block",
            width: "calc(50% - 12px)",
            marginRight: "24px",
          }}
        >
          <Input.Password placeholder={t("form.password")} />
        </Form.Item>

        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: t("form.error.required"),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder={t("form.password.confirm")} />
        </Form.Item>
      </Form.Item>

      <Form.Item
        name="language"
        rules={[{ message: t("form.error.required") }]}
      >
        <Select placeholder={t("form.language")} defaultValue={"pt_BR"}>
          <Option value="pt_BR">{t("form.language.pt")}</Option>
          <Option value="en_US">{t("form.language.en")}</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error(t("form.error.required"))),
          },
        ]}
      >
        <Checkbox>{t("form.agreement")}</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
        <Link to="../">
          <Button type="link"> {t("cancel")}</Button>
        </Link>
      </Form.Item>
    </Form>
  );
};
