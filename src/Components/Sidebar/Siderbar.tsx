import React from "react";
import { Menu } from "./Menu";
import { FixedMenu, SidebarWrapper } from "./Sidebar.style";
import { Header } from "../Header";

export const SideBar = () => {
  return (
    <SidebarWrapper>
      <FixedMenu>
        <Header name="Michael" />
        <Menu />
      </FixedMenu>
    </SidebarWrapper>
  );
};
