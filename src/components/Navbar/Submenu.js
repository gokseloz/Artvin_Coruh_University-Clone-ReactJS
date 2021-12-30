import React, { useState, useRef, useEffect } from "react";
import { FaCaretRight, FaCaretLeft, FaPlus, FaMinus } from "react-icons/fa";
import Submenu2 from "./Submenu2";

const Submenu = ({ id, title, subMenu, link }) => {
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const dropdown2ContainerRef = useRef();

  useEffect(() => {
    if (showSubmenu2) {
      dropdown2ContainerRef.current.style.maxHeight = `999px`;
    } else {
      if (dropdown2ContainerRef.current) {
        dropdown2ContainerRef.current.style.maxHeight = `0px`;
      } else {
        console.log(dropdown2ContainerRef.current);
      }
    }
  }, [showSubmenu2]);

  return (
    <>
      {subMenu && (
        <li className="dropdownItem" key={id}>
          <span
            className="dropdown-link"
            onClick={() => setShowSubmenu2(!showSubmenu2)}
            tabIndex="0"
          >
            <div className="dropdownItem-PlusMinus-mobile">
              {showSubmenu2 ? <FaMinus /> : <FaPlus />}
            </div>
            {title}
          </span>
          {id.startsWith("4") || id.startsWith("5") ? (
            <FaCaretLeft className="nav-caret" />
          ) : (
            <FaCaretRight className="nav-caret" />
          )}

          <div className="dropdown2-container" ref={dropdown2ContainerRef}>
            <ul className="dropdown2">
              {subMenu.map((subM) => {
                return <Submenu2 key={subM.id} {...subM} />;
              })}
            </ul>
          </div>
        </li>
      )}
      {link && (
        <li className="dropdownItem" key={id}>
          <a href="/" className="dropdown-link" tabIndex="0">
            {title}
          </a>
        </li>
      )}
    </>
  );
};

export default Submenu;
