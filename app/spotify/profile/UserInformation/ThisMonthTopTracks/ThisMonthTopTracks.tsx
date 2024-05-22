"use client";
import cn from "classnames";
import style from "./ThisMonthTopTracks.module.scss";
import { fetchTopTracksThisMonth } from "@/app/store/asyncThunks";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";

export default function ThisMonthTopTracks() {
  const dispatch = useDispatch<AppDispatch>();
  const { thisMonthTopTracks } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    dispatch(fetchTopTracksThisMonth());
  }, []);

  useEffect(() => {
    console.log(thisMonthTopTracks);
  }, [thisMonthTopTracks]);

  return <div className={cn(style.tracks_container)}>ThisMonthTopTracks</div>;
}
