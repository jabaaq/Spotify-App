"use client";
import styles from "./page.module.scss";
import cn from "classnames";
import Login from "@/component/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { reducerCases } from "./store/slice";

export default function Home() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(reducerCases(token));
      console.log(token);
    }
  }, [token, dispatch]);
  return (
    <main className={cn(styles.main, { [styles.test]: true })}>
      <h1>Hello world!</h1>
      {token ? "You are logged in" : <Login />}
    </main>
  );
}
