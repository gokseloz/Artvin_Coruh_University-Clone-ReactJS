import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaPlus, FaMinus } from "react-icons/fa";
import Submenu from "./Submenu";

const NavItem = ({ id, title, subMenu }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const dropdown1ContainerRef = useRef();

  useEffect(() => {
    if (showSubmenu) {
      dropdown1ContainerRef.current.style.maxHeight = `999px`;
    } else {
      dropdown1ContainerRef.current.style.maxHeight = `0px`;
    }
  }, [showSubmenu]);

  return (
    <li className="nav-item" key={id} tabIndex="0">
      {title}
      <FaCaretDown className="nav-caret caret-down" />
      <button
        className="showSubMenuBtn"
        onClick={() => setShowSubmenu(!showSubmenu)}
      >
        {showSubmenu ? <FaMinus /> : <FaPlus />}
      </button>
      <div className="dropdown1-container" ref={dropdown1ContainerRef}>
        <ul className="dropdown1">
          {subMenu.map((subM) => {
            return <Submenu key={subM.id} {...subM} />;
          })}
        </ul>
      </div>
    </li>
  );
};

export default NavItem;
