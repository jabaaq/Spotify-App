"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import PlaylistBuilder from "@/component/PlaylistBuilder/PlaylistBuilder";
import { useFetch } from "@/app/store/asyncThunks";

export default function Album({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchedAlbumById } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  const { fetchUserAlbumById } = useFetch();

  useEffect(() => {
    dispatch(fetchUserAlbumById(params.id));
  }, [dispatch, params.id]);

  const {
    name,
    id,
    href,
    total_tracks,
    image,
    tracks,
    description,
    release_date,
    artist,
    artist_url,
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
      artist={artist}
      artist_url={artist_url}
      type="Album"
    />
  );
}
