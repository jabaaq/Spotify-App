"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAlbumById } from "@/app/store/asyncThunks";
import { AppDispatch, RootState } from "@/app/store/store";
import PlaylistBuilder from "@/component/PlaylistBuilder/PlaylistBuilder";

export default function Album({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchedAlbumById } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  useEffect(() => {
    dispatch(fetchUserAlbumById(params.id));
  }, []);

  useEffect(() => {
    console.log(fetchedAlbumById);
  }, [fetchedAlbumById]);

  const {
    name,
    id,
    href,
    total_tracks,
    image,
    tracks,
    description,
    release_date,
  }: any = fetchedAlbumById;

  return (
    <PlaylistBuilder
      name={name}
      id={id}
      href={href}
      total_tracks={total_tracks}
      image={image}
      tracks={tracks}
      release_date={release_date}
    />
  );
}
