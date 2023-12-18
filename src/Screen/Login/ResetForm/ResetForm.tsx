import { useUserRequests } from "@requests/userRequests";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

interface ResetFormValues {
  email: string;
}

export const ResetForm = () => {
  const { t } = useTranslation();
  const { resetPassword } = useUserRequests();

  const onFinish = ({ email }: ResetFormValues) => {
    resetPassword.mutate(email);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: "100%" }}
    >
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} noStyle>
        <Button
          type="primary"
          htmlType="submit"
          loading={resetPassword.isLoading}
        >
          {t("reset")}
        </Button>
      </Form.Item>
    </Form>
  );
};
