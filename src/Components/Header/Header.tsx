import { Avatar, Input, Popover } from "antd";
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
  logo?: string;
  name: string;
}

export const Header = ({ logo, name }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <AvatarWrapper>
        <Popover placement="bottom" content={<UserMenu />} trigger="click">
          <Avatar size={80} style={{ cursor: "pointer" }}>
            {name.slice(0, 2).toUpperCase()}
          </Avatar>
        </Popover>
      </AvatarWrapper>
      <Logo>{logo ? <img src={logo} alt={name} /> : <H3>{name}</H3>}</Logo>
      <QuickActions>Viajante iniciante</QuickActions>
    </HeaderWrapper>
  );
};
