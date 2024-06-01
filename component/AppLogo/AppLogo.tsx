"use client";
import Link from "next/link";
import style from "./AppLogo.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { handlePageChange, toggleSideMenu } from "@/app/store/slice";
import logo from "../../images/logo.png";

export default function AppLogo() {
  const dispatch = useDispatch();
  return (
    <Link
      href={"/spotify"}
      className={cn(style.logo)}
      onClick={() => dispatch(handlePageChange("home"))}
    >
      <img src={logo.src} alt="Logo" />
    </Link>
  );
}
