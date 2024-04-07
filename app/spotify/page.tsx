"use client";
import cn from "classnames";
import style from "./spotify.module.scss";
import Link from "next/link";
import { checkToken } from "@/component/checkToken";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Login from "@/component/Login/Login";
import Home from "../page";
import { useRouter } from "next/navigation";

export default function Spotify() {
  const router = useRouter();
  const checkT = checkToken();
  const { token } = useSelector((state: RootState) => state.spotifyReducer);
  useEffect(() => {
    console.log(checkT);
    console.log(token);
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <main className={cn(style.main)}>
      {/* {checkT ? <h1>hello world!</h1> : <Login />} */}
      {checkT ? <h1>Hello</h1> : <Login />}
    </main>
  );
}
