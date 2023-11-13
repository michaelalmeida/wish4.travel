import { Avatar, Input, Popover, Skeleton } from "antd";
import React from "react";
import { H3 } from "../../Ui/Typography";
import {
  AvatarWrapper,
  HeaderWrapper,
  Logo,
  QuickActions,
} from "./Header.style";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  name?: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <AvatarWrapper>
        <Popover placement="bottom" content={<UserMenu />} trigger="click">
          <Avatar size={80} style={{ cursor: "pointer" }}>
            {name && name.slice(0, 2).toUpperCase()}
          </Avatar>
        </Popover>
      </AvatarWrapper>
      <Logo>
        <H3>{name ? name : <Skeleton.Input active />}</H3>
      </Logo>
      <QuickActions>Viajante iniciante</QuickActions>
    </HeaderWrapper>
  );
};
