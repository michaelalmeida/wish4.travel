import { useTranslation } from "react-i18next";
import { H1 } from "@ui/Typography";
import * as Style from "./Login.style";
import { LoginForm } from "./LoginForm";
import TravelingIllustration from "@assets/illustrations/traveling_together.svg";

import { Container } from "@ui/Container";
import { useUserCookie } from "@hooks/useUser";
import { Navigate } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import { Button } from "antd";
import { useState } from "react";
import { ResetForm } from "./ResetForm";

const Login = () => {
  const [resetPasswordForm, setResetPasswordForm] = useState(false);
  const { t } = useTranslation();
  const { userId } = useUserCookie();

  if (userId) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <Container>
      <Style.LoginWrapper>
        <Style.LoginForm>
          {resetPasswordForm ? <ResetForm /> : <LoginForm />}
          <Style.Bottom>
            <Button
              type="link"
              onClick={() => {
                setResetPasswordForm(!resetPasswordForm);
              }}
            >
              {resetPasswordForm
                ? "Voltar ao login"
                : t("login.forgetPassword")}
            </Button>
          </Style.Bottom>
        </Style.LoginForm>
        <Style.LoginSide>
          <H1 white>{t("form.title")}</H1>
          <img src={TravelingIllustration} alt="Traveling Illustration" />
        </Style.LoginSide>
      </Style.LoginWrapper>
    </Container>
  );
};

export default Login;
