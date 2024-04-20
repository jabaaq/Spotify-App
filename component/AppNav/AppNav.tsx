"use client";
import style from "./AppNav.module.scss";
import cn from "classnames";
import { GoHomeFill } from "react-icons/go";
import { BiSolidCollection } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";

const AppNav = () => {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page: string): void => {
    setActivePage(page);
  };

  return (
    <nav className={cn(style.AppNav)}>
      <GoHomeFill
        size={20}
        className={cn({ [style.activePage]: activePage === "home" })}
        onClick={() => handlePageChange("home")}
      />
      <BiSolidCollection
        size={20}
        className={cn({ [style.activePage]: activePage === "playlist" })}
        onClick={() => handlePageChange("playlist")}
      />
      <IoPerson
        size={20}
        className={cn({ [style.activePage]: activePage === "profile" })}
        onClick={() => handlePageChange("profile")}
      />
    </nav>
  );
};

export default AppNav;
