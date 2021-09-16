import React from "react";
import NavItem from "./NavItem";

const Navbar = ({ menu }) => {
  return (
    <nav className="header-navbar">
      <ul className="navbar-nav">
        {menu.map((item) => {
          return <NavItem key={item.id} {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
