"use client";
import style from "./AppNav.module.scss";
import cn from "classnames";
import { GoHomeFill } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiSolidCollection } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { NavItem } from "./AppNav.props";
import { handlePageChange } from "@/app/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import cookie from "@boiseitguru/cookie-cutter";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const navItems: NavItem[] = [
  { icon: <GoHomeFill size={20} />, page: "spotify", name: "home" },
  {
    icon: <BiSolidCollection size={20} />,
    page: "collection",
    name: "collection",
  },
  { icon: <FaSearch size={20} />, page: "search", name: "search" },
  { icon: <IoPerson size={20} />, page: "profile", name: "profile" },
  { icon: <IoLogOut size={20} />, page: "", name: "logout" },
];

const AppNav = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  const pathname = usePathname();

  useEffect(() => {
    const path = pathname.split("/");
    dispatch(handlePageChange(path[path.length - 1]));
  }, [pathname]);

  const [screenY, setScreenY] = useState(0);

  const handleSetScreenY = () => {
    setScreenY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSetScreenY);
  }, []);

  const handleLogOut = (): void => {
    cookie.set("token", "", { expires: new Date(0) });
    sessionStorage.removeItem("ActivePage");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <nav
      className={cn(style.AppNav, {
        [style.slideUp]: screenY > 5,
      })}
    >
      <ul>
        {navItems.map((item, i) => (
          <Link
            href={
              item.page === "spotify" ? "/spotify" : `/spotify/${item.page}`
            }
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
