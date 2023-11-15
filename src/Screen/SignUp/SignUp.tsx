import { Button, Result } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import WorkingIllustration from "@/assets/illustrations/working.svg";
import { Container } from "@ui/Container";
import { H1, P } from "@ui/Typography";
import * as Style from "./SignUp.style";
import { SignUpForm } from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../../constants/routes";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  const gotToDashboard = () => {
    navigate(DASHBOARD_ROUTES.HOME);
  };

  return (
    <Container>
      <Style.SignUpWrapper>
        <Style.SignUpSide>
          <img src={WorkingIllustration} alt="Signing Up  Illustration" />
        </Style.SignUpSide>
        <Style.SignUpForm>
          {!completed && (
            <>
              <H1 marginBottom>{t("signUp")}</H1>
              <P marginBottom>{t("form.signUp.description")}</P>
            </>
          )}
          {completed ? (
            <Result
              status="success"
              title={t("signUp.success")}
              subTitle={t("signUp.needToVerifyEmail")}
              extra={[
                <Button type="primary" key="dashboard" onClick={gotToDashboard}>
                  {t("signUp.goToDashboard")}
                </Button>,
              ]}
            />
          ) : (
            <SignUpForm setCompleted={setCompleted} />
          )}
        </Style.SignUpForm>
      </Style.SignUpWrapper>
    </Container>
  );
};

export default SignUp;
