"use client";
import cn from "classnames";
import style from "./HamburgerCheckbox.module.scss";
import { toggleSideMenu } from "@/app/store/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const HamburgerCheckbox = (): JSX.Element => {
  const dispatch = useDispatch();

  const { openSideMenu } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return (
    <label className={cn(style.hamburger)}>
      <input
        type="checkbox"
        onClick={() => dispatch(toggleSideMenu(null))}
        checked={openSideMenu}
        readOnly
      />
      <svg viewBox="0 0 32 32">
        <path
          className={cn(style.line, style.line_top_button)}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className={cn(style.line)} d="M7 16 27 16"></path>
      </svg>
    </label>
  );
};

export default HamburgerCheckbox;
