"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserPlaylistById,
  fetchUserAlbumById,
} from "@/app/store/asyncThunks";
import { AppDispatch, RootState } from "@/app/store/store";
import PlaylistBuilder from "@/component/PlaylistBuilder/PlaylistBuilder";

export default function playlist({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchedPlaylistById } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  useEffect(() => {
    // dispatch(fetchUserPlaylistById(params.id));
    dispatch(fetchUserAlbumById(params.id));
  }, []);

  useEffect(() => {
    console.log(fetchedPlaylistById);
  }, [fetchedPlaylistById]);

  const {
    name,
    id,
    href,
    label,
    popularity,
    release_date,
    total_tracks,
    image,
    tracks,
  }: any = fetchedPlaylistById;

  return (
    <>
      <PlaylistBuilder
        id={id}
        name={name}
        image={image}
        total_tracks={total_tracks}
        tracks={tracks}
        release_date={release_date}
      />
    </>
  );
}
