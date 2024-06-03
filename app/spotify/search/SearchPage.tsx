"use client";
import cn from "classnames";
import style from "./SearchPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSearchItem } from "@/app/store/asyncThunks";
import { AppDispatch } from "@/app/store/store";

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchSearchItem());
  // }, []);

  return (
    <div className={cn(style.search_page_container)}>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
    </div>
  );
}
