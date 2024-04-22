"use client";
import style from "./SideMenu.module.scss";
import cn from "classnames";
import { navItems } from "../AppNav/AppNav";
import { useSelector, useDispatch } from "react-redux";
import { handlePageChange, toggleSideMenu } from "@/app/store/slice";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";

const SideMenu = (): JSX.Element => {
  const dispatch = useDispatch();
  const { activePage, openSideMenu } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    console.log(openSideMenu);
  }, [openSideMenu]);

  return (
    <div
      className={cn(style.SideMenu, {
        [style.open]: openSideMenu,
      })}
    >
      <ul>
        {navItems.map((item, i) => (
          <li
            key={i}
            className={cn({ [style.activePage]: activePage === item.page })}
            onClick={() =>
              dispatch(
                handlePageChange(item.page),
                dispatch(toggleSideMenu(false))
              )
            }
          >
            {item.icon}
            {item.page[0].toUpperCase() + item.page.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
