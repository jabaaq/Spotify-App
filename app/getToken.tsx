"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import { useEffect } from "react";
import { setToken } from "./store/slice";
import Login from "@/component/Login/Login";
import Spotify from "./spotify/page";
import { useRouter } from "next/navigation";
const GetToken = () => {
  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const hash: string = window.location.hash;

    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(setToken(token));
      router.push("/");
    }
  }, [dispatch, router]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default GetToken;
