"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { setToken } from "./store/slice";
import Login from "@/component/Login/Login";
import Spotify from "./spotify/page";

const GetToken = () => {
  const { token } = useSelector((state: RootState) => state.spotifyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash: string = window.location.hash;
    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(setToken(token));
    }
  }, [token, dispatch]);

  return <div>{token ? <h1>Logged</h1> : <Login />}</div>; //I have to add Error page here instead of <Login/>
};

export default GetToken;
