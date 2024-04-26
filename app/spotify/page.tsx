"use client";
import cn from "classnames";
import style from "./spotify.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import Login from "@/component/Login/Login";
import {
  fetchTopTracks,
  fetchUserInformation,
  fetchTrackRecommendations,
  fetchGenres,
  fetchNewReleases,
  fetchArtists,
} from "../store/slice";
import HomePage from "./HomePage/HomePage";
import { useAuth } from "../useAuth";

export default function Spotify() {
  const dispatch = useDispatch<AppDispatch>();

  // const token = useAuth();

  useEffect(() => {
    // dispatch(fetchGenres());
    dispatch(fetchArtists());
    dispatch(fetchTopTracks());
    dispatch(fetchNewReleases());
    dispatch(fetchUserInformation());
    // dispatch(fetchTrackRecommendations());
  }, [dispatch]);

  return (
    // <main className={cn(style.main)}>{token ? <HomePage /> : <Login />}</main>
    <main className={cn(style.main)}>
      <HomePage />
    </main>
  );
}
