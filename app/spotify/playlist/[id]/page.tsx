"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPlaylistById } from "@/app/store/asyncThunks";
import { AppDispatch, RootState } from "@/app/store/store";
import PlaylistBuilder from "@/component/PlaylistBuilder/PlaylistBuilder";

export default function playlist({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchedPlaylistById } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    dispatch(fetchUserPlaylistById(params.id));
  }, []);

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
    <>
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
    </>
  );
}
