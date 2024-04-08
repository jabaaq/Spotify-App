"use client";
import cn from "classnames";
import style from "./spotify.module.scss";
import Link from "next/link";
import { checkToken } from "@/component/checkToken";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import Login from "@/component/Login/Login";
import { useRouter } from "next/navigation";
import { fetchPlaylist } from "../store/slice";

export default function Spotify() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const checkT = checkToken();

  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  useEffect(() => {
    console.log(checkT);
    console.log(token);
    dispatch(fetchPlaylist());
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <main className={cn(style.main)}>
      {checkT ? <h1>Hello</h1> : <Login />}
    </main>
  );
}
