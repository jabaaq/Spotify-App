"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import PlaylistBuilder from "@/component/PlaylistBuilder/PlaylistBuilder";
import { useFetch } from "@/app/store/asyncThunks";

export default function Playlist({ params }: { params: { id: string } }) {
  const { fetchUserPlaylistById } = useFetch();
  const dispatch = useDispatch<AppDispatch>();
  const { fetchedPlaylistById } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    dispatch(fetchUserPlaylistById(params.id));
  }, [dispatch, params.id, fetchUserPlaylistById]);

  const {
    name,
    id,
    href,
    total_tracks,
    image,
    tracks,
    description,
    playlist_owner_name,
    playlist_owner_href,
    playlist_owner_followers,
  }: any = fetchedPlaylistById;

  return (
    <PlaylistBuilder
      id={id}
      name={name}
      image={image}
      total_tracks={total_tracks}
      tracks={tracks}
      description={description}
      type="Playlist"
      playlist_owner_name={playlist_owner_name}
      playlist_owner_href={playlist_owner_href}
      playlist_owner_followers={playlist_owner_followers}
    />
  );
}
