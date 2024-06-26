"use client";
import cn from "classnames";
import style from "./spotify.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import HomePage from "./HomePage/HomePage";
import { useFetch } from "../store/asyncThunks";

/* eslint-disable */
export default function Spotify() {
  const {
    fetchUserInformation,
    fetchTrackRecommendations,
    fetchNewReleases,
    fetchTopTracks,
    // fetchArtists,
  } = useFetch();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(fetchArtists());
    dispatch(fetchTopTracks());
    dispatch(fetchNewReleases());
    dispatch(fetchUserInformation());
    dispatch(fetchTrackRecommendations());
  }, [dispatch]);

  return (
    <main className={cn(style.main)}>
      <HomePage />
    </main>
  );
}
