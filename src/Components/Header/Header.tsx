import { Avatar, Input, Popover } from "antd";
import React from "react";
import { ScreenContainer } from "../../Ui/Container";
import { H1 } from "../../Ui/Typography";
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
      <ScreenContainer>
        <Logo>{logo ? <img src={logo} alt={name} /> : <H1>{name}</H1>}</Logo>
        <QuickActions>
          <Input />
        </QuickActions>
        <AvatarWrapper>
          <Popover
            placement="bottomRight"
            content={<UserMenu />}
            trigger="click"
          >
            <Avatar size={40} style={{ cursor: "pointer" }}>
              {name.slice(0, 2).toUpperCase()}
            </Avatar>
          </Popover>
        </AvatarWrapper>
      </ScreenContainer>
    </HeaderWrapper>
  );
};
