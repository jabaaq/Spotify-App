"use client";
import style from "./NavbarSearch.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handlePageChange } from "@/app/store/slice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { fetchSearchItem } from "@/app/store/asyncThunks";
import { AppDispatch } from "@/app/store/store";
import { useEffect, useState } from "react";

const NavbarSearch = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchSearchItem(value));
  }, [value]);

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Link href={"/spotify/search"} className={cn(style.search_container)}>
      <input
        type="search"
        name="songSearch"
        id={cn(style.searchInput)}
        placeholder="&#xf002; What do you want to play?"
        value={value}
        onClick={() => dispatch(handlePageChange("search"))}
        onChange={handleInputChange}
      />
    </Link>
  );
};

export default NavbarSearch;
