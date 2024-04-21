"use client";
import style from "./AppNav.module.scss";
import cn from "classnames";
import { GoHomeFill } from "react-icons/go";
import { BiSolidCollection } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { NavItem } from "./AppNav.props";
import { handlePageChange } from "@/app/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";

export const navItems: NavItem[] = [
  { icon: <GoHomeFill size={20} />, page: "home" },
  { icon: <BiSolidCollection size={20} />, page: "playlist" },
  { icon: <IoPerson size={20} />, page: "profile" },
];

const AppNav = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return (
    <nav className={cn(style.AppNav)}>
      <ul>
        {navItems.map((item, i) => (
          <li
            key={i}
            className={cn({ [style.activePage]: activePage === item.page })}
            onClick={() => dispatch(handlePageChange(item.page))}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNav;
