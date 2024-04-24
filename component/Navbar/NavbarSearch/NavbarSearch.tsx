import style from "./NavbarSearch.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";

const NavbarSearch = (): JSX.Element => {
  return (
    <>
      <div className="searchLogo">
        <CiSearch />
      </div>
      <input
        type="search"
        name="songSearch"
        id="songSearch"
        placeholder="Search"
      />
    </>
  );
};

export default NavbarSearch;
