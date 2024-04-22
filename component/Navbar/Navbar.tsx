import style from "./Navbar.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";
import { NavbarProps } from "./Navbar.props";
import logo from "../../images/logo.png";
import SideMenu from "../SideMenu/SideMenu";
import HamburgerCheckbox from "../Checkbox/HamburgerCheckbox";
import Link from "next/link";

const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <nav className={cn(style.navbar)}>
      <Link href={"/spotify"} className={cn(style.logo)}>
        <img src={logo.src} alt="Logo" />
      </Link>
      <div className={cn(style.search)}>
        <div className="searchLogo">
          <CiSearch />
        </div>
        <input
          type="search"
          name="songSearch"
          id="songSearch"
          placeholder="Search"
        />
      </div>
      <div className={cn(style.hamburger_container)}>
        <HamburgerCheckbox />
      </div>
      <SideMenu />
    </nav>
  );
};

export default Navbar;
