"use client";
import style from "./AppNav.module.scss";
import cn from "classnames";
import { GoHomeFill } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";
import { BiSolidCollection } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { NavItem } from "./AppNav.props";
import { handlePageChange } from "@/app/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import cookie from "@boiseitguru/cookie-cutter";
import { useEffect } from "react";

export const navItems: NavItem[] = [
  { icon: <GoHomeFill size={20} />, page: "home", name: "home" },
  {
    icon: <BiSolidCollection size={20} />,
    page: "collection",
    name: "collection",
  },
  { icon: <IoPerson size={20} />, page: "profile", name: "profile" },
  { icon: <IoLogOut size={20} />, page: "", name: "logout" },
];

const AppNav = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    const storageActivePage = sessionStorage.getItem("ActivePage");
    handlePageChange(storageActivePage);
  }, []);

  const handleLogOut = (): void => {
    cookie.set("token", "", { expires: new Date(0) });
    sessionStorage.removeItem("ActivePage");
    window.location.href = "/";
  };

  return (
    <nav className={cn(style.AppNav)}>
      <ul>
        {navItems.map((item, i) => (
          <Link
            href={item.page === "home" ? "/spotify" : `/spotify/${item.page}`}
            key={i}
            className={cn({ [style.activePage]: activePage === item.page })}
            onClick={() =>
              item.name === "logout"
                ? handleLogOut()
                : dispatch(handlePageChange(item.page))
            }
          >
            {item.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default AppNav;
