import React from "react";
import styled from "styled-components";
import { BLACK, PINK } from "../../../constants/colors";
import { useUserLogin } from "../../../Hooks/useUser";
import { DASHBOARD_ROUTES } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { logout } = useUserLogin();
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(DASHBOARD_ROUTES.PROFILE);
  };

  return (
    <Menu>
      <Item onClick={goToProfile}>{t("menu.profile.edit")}</Item>
      <Item onClick={() => logout()}>{t("menu.profile.logout")}</Item>
    </Menu>
  );
};
