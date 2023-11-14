import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Icon, MenuItem, MenuList, Nav } from "./Sidebar.style";
import { menuOptions } from "./menuOptions";

export const Menu = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
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
    </>
  );
};
