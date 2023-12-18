import { useUserLogin } from "@hooks/useUser";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

interface ResetFormValues {
  email: string;
}

export const ResetForm = () => {
  const { t } = useTranslation();
  const { sendPasswordResetEmail, sending } = useUserLogin();

  const onFinish = async ({ email }: ResetFormValues) => {
    const success = await sendPasswordResetEmail(email);

    if (success) {
      toast.success(t("form.reset.success"));
    }
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
        <Button type="primary" htmlType="submit" loading={sending}>
          {t("reset")}
        </Button>
      </Form.Item>
    </Form>
  );
};
