import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Submenu3 = ({ id, title, link, subMenu }) => {
  return (
    <>
      {subMenu && (
        <li className="dropdownItem3" key={id}>
          <a href="/" className="dropdown-link3">
            {title}
          </a>
          <FaCaretRight className="nav-caret" />

          {/* For future subMenus */}
          {/* <ul className="dropdown4">
            {subMenu.map((subM) => {
              const { id, title, subMenu, link } = subM;
              return <Submenu4 {...subM} />;
            })}
          </ul> */}
        </li>
      )}
      {link && (
        <li className="dropdownItem3" key={id}>
          <a href="/" className="dropdown-link3">
            {title}
          </a>
        </li>
      )}
    </>
  );
};

export default Submenu3;
