"use client";
import cn from "classnames";
import style from "./ThisMonthTopTracks.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import ProfileTrackCard from "../../ProfileTrackCard/ProfileTrackCard";
import { useFetch } from "@/app/store/asyncThunks";

export default function ThisMonthTopTracks() {
  const { fetchTopTracksThisMonth } = useFetch();
  const dispatch = useDispatch<AppDispatch>();
  const { thisMonthTopTracks } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    dispatch(fetchTopTracksThisMonth());
  }, [dispatch, fetchTopTracksThisMonth]);

  return (
    <div className={cn(style.tracks_container)}>
      <div className={cn(style.tracks_container_header)}>
        <h2>Top tracks this month</h2>
        <span>Only visible for you</span>
      </div>
      <></>
      {thisMonthTopTracks.map((item: any, i) => (
        <ProfileTrackCard
          key={item.id}
          position={i + 1}
          title={item.title}
          artist={item.artist}
          duration={item.duration}
          image={item.image}
          id={item.id}
          preview_url={item.preview_url}
          spotify_url={item.spotify_url}
        />
      ))}
    </div>
  );
}

{
  /* <ProfileTrackCard key={item.id} title={item.title} artist={item.artist} duration={item.duration} image={item.image} id={item.id}/> */
}
