import React, { useEffect } from "react";
import { SideBar } from "../Sidebar";
import { Container, Content, Layout } from "./PrivateLayout.style";
import { useUserContext, useUserCookie } from "../../Hooks/useUser";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUserRequests } from "../../requests/userRequests/useUserRequests";
import { useTranslation } from "react-i18next";

export const PrivateLayout = ({ children }: { children: JSX.Element }) => {
  const { userId } = useUserCookie();
  const { user } = useUserContext();
  const { getUserInfoMutation } = useUserRequests();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (userId && !user.uid) {
      getUserInfoMutation.mutate(userId);
    }
  }, [userId, user.uid]);

  useEffect(() => {
    if (getUserInfoMutation.data?.language) {
      i18n.changeLanguage(getUserInfoMutation.data.language);
    }
  }, [getUserInfoMutation.data?.language]);

  return userId ? (
    <Layout>
      <Container>
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </Layout>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};
