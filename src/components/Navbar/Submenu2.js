import React, { useState, useRef, useEffect } from "react";
import { FaCaretRight, FaPlus, FaMinus } from "react-icons/fa";
import Submenu3 from "./Submenu3";

const Submenu2 = ({ id, title, subMenu, link }) => {
  const [showSubmenu3, setShowSubmenu3] = useState(false);
  const dropdown3ContainerRef = useRef();

  useEffect(() => {
    if (showSubmenu3) {
      dropdown3ContainerRef.current.style.maxHeight = `999px`;
    } else {
      if (dropdown3ContainerRef.current) {
        dropdown3ContainerRef.current.style.maxHeight = `0px`;
      } else {
        console.log(dropdown3ContainerRef.current);
      }
    }
  }, [showSubmenu3]);

  return (
    <>
      {subMenu && (
        <li className="dropdownItem2" key={id}>
          <span
            href="/"
            className="dropdown-link2"
            onClick={() => setShowSubmenu3(!showSubmenu3)}
          >
            <div className="dropdownItem-PlusMinus-mobile">
              {showSubmenu3 ? <FaMinus /> : <FaPlus />}
            </div>
            {title}
          </span>
          <FaCaretRight className="nav-caret" />

          <div className="dropdown3-container" ref={dropdown3ContainerRef}>
            <ul className="dropdown3">
              {subMenu.map((subM) => {
                return <Submenu3 key={subM.id} {...subM} />;
              })}
            </ul>
          </div>
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
