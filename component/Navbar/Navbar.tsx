import style from "./Navbar.module.scss";
import cn from "classnames";
import { NavbarProps } from "./Navbar.props";
import SideMenu from "../SideMenu/SideMenu";
import HamburgerCheckbox from "../Checkbox/HamburgerCheckbox";
import AppLogo from "../AppLogo/AppLogo";
import NavbarSearch from "./NavbarSearch/NavbarSearch";

const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <nav className={cn(style.navbar)}>
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
