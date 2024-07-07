"use client";
import style from "./Navbar.module.scss";
import cn from "classnames";
import { NavbarProps } from "./Navbar.props";
import SideMenu from "../SideMenu/SideMenu";
import AppLogo from "../AppLogo/AppLogo";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import { useEffect, useState } from "react";
import HamburgerCheckbox from "../checkbox/HamburgerCheckbox";

const Navbar = ({ children, ...props }: NavbarProps) => {
  const [screenY, setScreenY] = useState(0);

  const handleSetScreenY = () => {
    setScreenY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSetScreenY);
  }, []);

  return (
    <nav
      className={cn(style.navbar, {
        [style.none]: screenY > 5,
      })}
    >
      <AppLogo />
      <div className={cn(style.search)}>
        <NavbarSearch />
      </div>
      <div className={cn(style.hamburger_container)}>
        <HamburgerCheckbox />
      </div>
      <SideMenu />
    </nav>
  );
};

export default Navbar;
