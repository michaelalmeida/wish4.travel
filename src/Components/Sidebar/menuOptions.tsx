import {
  faHome,
  faPlus,
  faRectangleList,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DASHBOARD_ROUTES } from "../../constants/routes";

export const menuOptions = [
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
