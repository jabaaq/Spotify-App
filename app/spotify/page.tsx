"use client";
import cn from "classnames";
import style from "./spotify.module.scss";
import Link from "next/link";
import { checkToken } from "@/component/checkToken";
import { useEffect } from "react";

export default function Spotify() {
  const checkT = checkToken();
  // const { token } = useSelector((state: RootState) => state.spotifyReducer);
  useEffect(() => {
    console.log(checkT);
  }, []);

  return (
    <main className={cn(style.main)}>
      {checkT ? <h1>hello world!</h1> : <h1>NOPE</h1>}
    </main>
  );
}
