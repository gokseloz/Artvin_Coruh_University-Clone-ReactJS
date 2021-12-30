import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ menu, isNavbarShowed }) => {
  const { t } = useTranslation();

  const headerNavbarContainerMobile = useRef();

  useEffect(() => {
    if (isNavbarShowed) {
      headerNavbarContainerMobile.current.style.height = `auto`;
    } else {
      headerNavbarContainerMobile.current.style.height = `0px`;
    }
  }, [isNavbarShowed]);

  const mobileNavbar = (
    <div
      className="header-navbar-container-mobile"
      ref={headerNavbarContainerMobile}
    >
      <form action="#" method="GET" className="header-searchForm-mobile">
        <input
          className="header-searchBox"
          type="text"
          placeholder={t("header_searchPlaceHolder")}
        />
        <FaSearch className="header-searchIcon" />
      </form>
      <nav className="header-navbar-mobile">
        <ul className="navbar-nav">
          {menu.map((item) => {
            return <NavItem key={item.id} {...item} />;
          })}
        </ul>
      </nav>
    </div>
  );

  const desktopNavbar = (
    <div className="header-navbar-container">
      <nav className="header-navbar">
        <ul className="navbar-nav">
          {menu.map((item) => {
            return <NavItem key={item.id} {...item} />;
          })}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {mobileNavbar}
      {desktopNavbar}
    </>
  );
};

export default Navbar;
