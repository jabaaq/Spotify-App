"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/useAuth";
import Login from "@/component/Login/Login";

const Playlist = (): JSX.Element => {
  const token = useAuth();

  return <>{token ? <h1>playlist</h1> : <Login />}</>;
};

export default Playlist;
