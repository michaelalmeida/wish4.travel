import React from "react";
import { SideBar } from "../Sidebar";
import { Container, Content, Layout } from "./PrivateLayout.style";
import { useUserCookie } from "../../Hooks/useUser";
import { Navigate } from "react-router-dom";
import { routes } from "../../constants/routes";

export const PrivateLayout = ({ children }: { children: JSX.Element }) => {
  const { userId } = useUserCookie();

  return userId ? (
    <Layout>
      <Container>
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </Layout>
  ) : (
    <Navigate to={routes.LOGIN} />
  );
};
