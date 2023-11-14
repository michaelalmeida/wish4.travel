import React from "react";

import { FloatButton } from "antd";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { menuOptions } from "./menuOptions";

export const MenuMobile = () => {
  const navigate = useNavigate();

  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<FontAwesomeIcon icon={faBars} />}
      >
        {menuOptions.map(({ label, link, icon }) => (
          <FloatButton key={label} icon={icon} onClick={() => navigate(link)} />
        ))}
      </FloatButton.Group>
    </>
  );
};
