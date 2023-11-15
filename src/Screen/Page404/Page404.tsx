import React from "react";
import { Container } from "../../Ui/Container";
import { Page404Wrapper } from "../Page404/Page404.style";
import { H1, P } from "../../Ui/Typography";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Page404 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToInitialPage = () => navigate(ROUTES.HOME);

  return (
    <Container>
      <Page404Wrapper>
        <H1>{t("app.pageNotFound.title")}</H1>
        <P>{t("app.pageNotFound.description")}</P>
        <Button onClick={goToInitialPage}>{t("menu.home")}</Button>
      </Page404Wrapper>
    </Container>
  );
};

export default Page404;
