"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { reducerCases } from "./store/slice";
import Login from "@/component/Login/Login";

const GetToken = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  useEffect(() => {
    const hash: string = window.location.hash;
    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(reducerCases(token));
      console.log(token);
    }
  }, [token, dispatch]);

  return <div>{token ? "You are logged in" : <Login />}</div>;
};

export default GetToken;
