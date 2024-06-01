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
        placeholder="What do you want to play?"
      />
    </>
  );
};

export default NavbarSearch;
