import React from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Submenu2 from "./Submenu2";

const Submenu = ({ id, title, subMenu, link }) => {
  return (
    <>
      {subMenu && (
        <li className="dropdownItem" key={id}>
          <a href="/" className="dropdown-link">
            {title}
          </a>
          {id.startsWith("4") || id.startsWith("5") ? (
            <FaCaretLeft className="nav-caret" />
          ) : (
            <FaCaretRight className="nav-caret" />
          )}

          <ul className="dropdown2">
            {subMenu.map((subM) => {
              return <Submenu2 key={subM.id} {...subM} />;
            })}
          </ul>
        </li>
      )}
      {link && (
        <li className="dropdownItem" key={id}>
          <a href="/" className="dropdown-link">
            {title}
          </a>
        </li>
      )}
    </>
  );
};

export default Submenu;
