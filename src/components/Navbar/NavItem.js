import React from "react";
import { FaCaretDown } from "react-icons/fa";
import Submenu from "./Submenu";

const NavItem = ({ id, title, subMenu }) => {
  return (
    <li className="nav-item" key={id}>
      {title}
      <FaCaretDown className="nav-caret" />
      <ul className="dropdown1">
        {subMenu.map((subM) => {
          return <Submenu key={subM.id} {...subM} />;
        })}
      </ul>
    </li>
  );
};

export default NavItem;
