import React from "react";
import styled from "styled-components";
import { BLACK, PINK } from "../../../constants/colors";
import { useUserLogin } from "../../../Hooks/useUser";

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: block;
  padding: 10px 20px;
  color: ${BLACK};
  text-align: center;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${PINK};
    border-radius: 5px;
  }
`;

export const UserMenu = () => {
  const { logout } = useUserLogin();

  return (
    <Menu>
      <Item>Perfil</Item>
      <Item>Configurações</Item>
      <Item onClick={() => logout()}>Logout</Item>
    </Menu>
  );
};
