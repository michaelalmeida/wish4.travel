import styled from "styled-components";
import { BLACK, MAIN_COLOR, PINK, WHITE, YELLOW } from "../../constants/colors";
import { BOX, PADDING } from "../../constants/sizes";

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-basis: 300px;
  flex-direction: column;
  padding: ${PADDING.EXTRA_LARGE}px;

  @media screen and (max-width: ${BOX.LARGE}px) {
    height: auto;
    padding: 0;
    flex-basis: 0;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  @media screen and (max-width: ${BOX.LARGE}px) {
    display: none;
  }
`;

export const MenuList = styled.nav`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface MenuItemProps {
  active?: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  margin-bottom: 10px;

  a {
    padding: 15px;
    display: block;
    background: ${({ active }) => (active ? MAIN_COLOR : "transparent")};
    color: ${({ active }) => (active ? WHITE : BLACK)};
    border-radius: 15px;

    ${({ active }) =>
      !active &&
      `&:hover {
      background: ${YELLOW};
      color: ${MAIN_COLOR};
    }`};
  }
`;

export const Icon = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

export const FixedMenu = styled.div`
  position: sticky;
  top: 0;
`;
