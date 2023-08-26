import {
  faHome,
  faPlus,
  faRectangleList,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../../constants/routes";
import { Icon, MenuItem, MenuList, Nav } from "./Sidebar.style";

export const Menu = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuOptions = [
    {
      icon: <FontAwesomeIcon icon={faHome} />,

      label: "menu.dashboard",
      link: DASHBOARD_ROUTES.HOME,
    },
    {
      icon: <FontAwesomeIcon icon={faPlus} />,
      label: "menu.create",
      link: DASHBOARD_ROUTES.CREATE,
    },
    {
      icon: <FontAwesomeIcon icon={faRectangleList} />,
      label: "menu.list",
      link: DASHBOARD_ROUTES.LIST,
    },
    {
      icon: <FontAwesomeIcon icon={faWindowRestore} />,
      label: "menu.configuration",
      link: DASHBOARD_ROUTES.SETTINGS,
    },
  ];

  return (
    <Nav>
      <MenuList>
        {menuOptions.map(({ label, link, icon }) => (
          <MenuItem key={label} active={location.pathname === link}>
            <Link to={link}>
              <Icon>{icon}</Icon> {t(label)}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Nav>
  );
};
