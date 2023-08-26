import React from "react";
import { Menu } from "./Menu";
import { SidebarWrapper } from "./Sidebar.style";
import { Header } from "../Header";

export const SideBar = () => {
  return (
    <SidebarWrapper>
      <Header name="Michael" />
      <Menu />
    </SidebarWrapper>
  );
};
