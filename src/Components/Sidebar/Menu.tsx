import {
  faCalendar,
  faHome,
  faPlusSquare,
  faRectangleList,
  faUserGroup,
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
      icon: <FontAwesomeIcon icon={faCalendar} />,
      label: "menu.calendar",
      link: DASHBOARD_ROUTES.CALENDAR,
    },
    {
      icon: <FontAwesomeIcon icon={faRectangleList} />,
      label: "menu.list",
      link: DASHBOARD_ROUTES.QUOTATION_LIST,
    },
    {
      icon: <FontAwesomeIcon icon={faPlusSquare} />,
      label: "menu.create",
      link: DASHBOARD_ROUTES.QUOTATION_CREATE,
    },
    {
      icon: <FontAwesomeIcon icon={faUserGroup} />,
      label: "menu.clients",
      link: DASHBOARD_ROUTES.CLIENTS,
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
