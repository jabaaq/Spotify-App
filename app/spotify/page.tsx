"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Spotify() {
  const { token } = useSelector((state: RootState) => state.spotifyReducer);
  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <>{token === null ? <h1>Please log in</h1> : <h1>Spotify Main Page</h1>}</> ////I have to add Error page here
  );
}
