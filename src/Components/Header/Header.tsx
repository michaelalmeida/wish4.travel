import { Avatar, Popover, Skeleton } from "antd";
import { H3 } from "@ui/Typography";
import {
  AvatarWrapper,
  HeaderWrapper,
  Logo,
  QuickActions,
} from "./Header.style";
import { UserMenu } from "./UserMenu";
import { isUsingMobileDevice } from "../../helpers/userDevice.helper";

interface HeaderProps {
  name?: string;
}

export const Header = ({ name }: HeaderProps) => {
  const avatarSize = isUsingMobileDevice() ? 40 : 80;

  return (
    <HeaderWrapper>
      <AvatarWrapper>
        <Popover placement="bottom" content={<UserMenu />} trigger="click">
          <Avatar size={avatarSize} style={{ cursor: "pointer" }}>
            {name && name.slice(0, 2).toUpperCase()}
          </Avatar>
        </Popover>
      </AvatarWrapper>
      <Logo>
        <H3 ellipsis>{name ? name : <Skeleton.Input active />}</H3>
      </Logo>
      <QuickActions>Viajante iniciante</QuickActions>
    </HeaderWrapper>
  );
};
