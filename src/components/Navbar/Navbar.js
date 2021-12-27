import React, { useRef, useEffect } from "react";
import NavItem from "./NavItem";
import "./Navbar.css";

const Navbar = ({ menu, isNavbarShowed }) => {
  const headerNavbarContainer = useRef();

  const mediaQuery = window.matchMedia(`(min-width: 760px`);

  useEffect(() => {
    if (isNavbarShowed) {
      headerNavbarContainer.current.style.height = `auto`;
    } else {
      if (mediaQuery.matches) {
        headerNavbarContainer.current.style.height = `auto`;
      } else {
        headerNavbarContainer.current.style.height = `0px`;
      }
    }
  }, [isNavbarShowed]);

  return (
    <div className="header-navbar-container" ref={headerNavbarContainer}>
      <nav className="header-navbar">
        <ul className="navbar-nav">
          {menu.map((item) => {
            return <NavItem key={item.id} {...item} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
