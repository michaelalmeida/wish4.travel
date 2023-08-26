import { Button, Result } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WorkingIllustration from "../../assets/illustrations/working.svg";
import { Container } from "../../Ui/Container";
import { H1, P } from "../../Ui/Typography";
import * as Style from "./SignUp.style";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
  const { t } = useTranslation();
  const [completed, setCompleted] = useState(false);

  return (
    <Container>
      <Style.SignUpWrapper>
        <Style.SignUpSide>
          <WorkingIllustration />
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
                <Button type="primary" key="dashboard">
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
