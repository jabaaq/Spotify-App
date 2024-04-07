"use client";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

export function checkToken() {
  const { token } = useSelector((state: RootState) => state.spotifyReducer);
  //   console.log(token);

  return !!token;
}
