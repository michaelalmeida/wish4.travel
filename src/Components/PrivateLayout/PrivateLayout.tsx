import React from "react";
import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { Container, Content, Layout } from "./PrivateLayout.style";

export const PrivateLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Layout>
      <Container>
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </Layout>
  );
};
