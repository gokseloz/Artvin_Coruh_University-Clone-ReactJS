import React, { useState } from "react";
import { FaCaretRight, FaCaretLeft, FaPlus, FaMinus } from "react-icons/fa";
import Submenu2 from "./Submenu2";

const Submenu = ({ id, title, subMenu, link }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <>
      {/* <FaMinus /> : <FaPlus />} */}
      {subMenu && (
        <li
          className="dropdownItem"
          key={id}
          onMouseOver={() => setShowSubmenu(true)}
          onMouseLeave={() => setShowSubmenu(false)}
        >
          <a href="/" className="dropdown-link">
            {showSubmenu ? <FaMinus /> : <FaPlus />}
            {title}
          </a>
          {id.startsWith("4") || id.startsWith("5") ? (
            <FaCaretLeft className="nav-caret" />
          ) : (
            <FaCaretRight className="nav-caret" />
          )}
          <div className="mobile-nav-caret-right"></div>

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
