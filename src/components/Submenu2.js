import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Submenu3 from "./Submenu3";

const Submenu2 = ({ id, title, subMenu, link }) => {
  return (
    <>
      {subMenu && (
        <li className="dropdownItem2" key={id}>
          <a href="/" className="dropdown-link2">
            {title}
          </a>
          <FaCaretRight className="nav-caret" />

          <ul className="dropdown3">
            {subMenu.map((subM) => {
              return <Submenu3 key={subM.id} {...subM} />;
            })}
          </ul>
        </li>
      )}
      {link && (
        <li className="dropdownItem2" key={id}>
          <a href="/" className="dropdown-link2">
            {title}
          </a>
        </li>
      )}
    </>
  );
};

export default Submenu2;
