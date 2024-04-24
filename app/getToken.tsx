"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { setToken } from "./store/slice";
import Login from "@/component/Login/Login";
import Spotify from "./spotify/page";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const GetToken = () => {
  const { token } = useSelector((state: RootState) => state.spotifyReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash: string = window.location.hash;
    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(setToken(token));
      router.push("/spotify");
    }

    console.log("pathname", pathname);
  }, [dispatch]);

  useEffect(() => {
    if (!token && pathname !== "/") {
      router.push("/");
    }
  }, [token, router]);

  return <div>{token ? <Login /> : <Login />}</div>; //I have to add Error page here instead of <Login/>
};

export default GetToken;
