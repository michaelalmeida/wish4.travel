import { useEffect } from "react";
import { SideBar } from "../Sidebar";
import { Container, Content, Layout } from "./PrivateLayout.style";
import { useUserContext, useUserCookie } from "../../Hooks/useUser";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUserRequests } from "../../requests";
import { useTranslation } from "react-i18next";
import { isUsingMobileDevice } from "../../helpers/userDevice.helper";
import { MenuMobile } from "../Sidebar/MenuMobile";

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
    if (user.language) {
      i18n.changeLanguage(user.language);
    }
  }, [user.language]);

  return userId ? (
    <Layout>
     <MenuMobile />
      <Container>
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </Layout>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};
