"use client";
import style from "./NavbarSearch.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const NavbarSearch = (): JSX.Element => {
  return (
    <>
      <div className="searchLogo">
        <CiSearch />
      </div>
      <Link href={"/spotify/search"}>
        <input
          type="search"
          name="songSearch"
          id="songSearch"
          placeholder="What do you want to play?"
          onClick={() => console.log("Clicked")}
        />
      </Link>
    </>
  );
};

export default NavbarSearch;
