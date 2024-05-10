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

export const navItems: NavItem[] = [
  { icon: <GoHomeFill size={20} />, page: "home" },
  { icon: <BiSolidCollection size={20} />, page: "playlist" },
  { icon: <IoPerson size={20} />, page: "profile" },
  { icon: <IoLogOut size={20} />, page: "/" },
];

const AppNav = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  const handleLog = (): void => {
    cookie.set("token", "", { expires: new Date(0) });
    window.location.reload();
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
              item.page === "/"
                ? handleLog()
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
