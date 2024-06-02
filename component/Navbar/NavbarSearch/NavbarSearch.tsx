"use client";
import style from "./NavbarSearch.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handlePageChange } from "@/app/store/slice";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarSearch = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Link href={"/spotify/search"} className={cn(style.search_container)}>
      <input
        type="search"
        name="songSearch"
        id={cn(style.searchInput)}
        placeholder="&#xf002; What do you want to play?"
        onClick={() => (
          console.log("Clicked"), dispatch(handlePageChange("search"))
        )}
      />
    </Link>
  );
};

export default NavbarSearch;
