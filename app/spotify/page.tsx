"use client";
import cn from "classnames";
import style from "./spotify.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import Login from "@/component/Login/Login";
import { useRouter } from "next/navigation";
import {
  fetchTopTracks,
  fetchUserInformation,
  fetchTrackRecommendations,
  fetchGenres,
  fetchNewReleases,
  fetchArtists,
} from "../store/slice";
import HomePage from "./HomePage/HomePage";

export default function Spotify() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  useEffect(() => {
    if (!token) {
      router.push("/");
    }

    // dispatch(fetchGenres());
    dispatch(fetchArtists());
    dispatch(fetchTopTracks());
    dispatch(fetchNewReleases());
    dispatch(fetchUserInformation());
    dispatch(fetchTrackRecommendations());
  }, [token, dispatch]);

  return (
    <main className={cn(style.main)}>{token ? <HomePage /> : <Login />}</main>
  );
}
