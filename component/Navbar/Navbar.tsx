import style from "./Navbar.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";
import { NavbarProps } from "./Navbar.props";
import logo from "../../images/logo.png";

const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <nav className={cn(style.navbar)}>
      <div className={cn(style.logo)}>
        <img src={logo.src} alt="Logo" />
      </div>
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
    </nav>
  );
};

export default Navbar;