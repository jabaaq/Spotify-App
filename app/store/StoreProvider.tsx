"use client";
import { useEffect } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // const dispatch = useDispatch();
  // const { token } = useSelector((state: RootState) => state.spotifyReducer);
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const token: string = hash.substring(1).split("&")[0].split("=")[1];
  //     console.log(token);
  //     dispatch({
  //       action: reducerCases.SET_TOKEN,
  //       token,
  //       type: "",
  //     });
  //   }
  // }, [token, dispatch]);
  return <Provider store={store}>{children}</Provider>;
};
