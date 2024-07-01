"use client";
import style from "./SideMenu.module.scss";
import cn from "classnames";
import { navItems } from "../AppNav/AppNav";
import { useSelector, useDispatch } from "react-redux";
import { handlePageChange, toggleSideMenu } from "@/app/store/slice";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import { handleLogOut } from "../Navbar/NavbarSearch/hooks";

const SideMenu = (): JSX.Element => {
  const dispatch = useDispatch();
  const { activePage, openSideMenu } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  const handleSideMenuLogout = () => {
    handleLogOut();
  };

  const handleSideMenuPageChange = (item: any) => {
    dispatch(handlePageChange(item.page));
    dispatch(toggleSideMenu(false));
  };

  return (
    <div
      className={cn(style.SideMenu, {
        [style.open]: openSideMenu,
      })}
    >
      <ul>
        {navItems.map((item, i) => (
          <Link
            href={item.name === "home" ? "/spotify" : `/spotify/${item.page}`}
            key={i}
            className={cn({ [style.activePage]: activePage === item.page })}
            onClick={() =>
              item.name === "logout"
                ? handleSideMenuLogout()
                : handleSideMenuPageChange(item)
            }
          >
            {item.icon}
            {item.name[0].toUpperCase() + item.name.slice(1)}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
