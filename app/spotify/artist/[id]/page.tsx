"use client";
import style from "./ArtistPage.module.scss";
import cn from "classnames";
import {
  fetchArtistInfo,
  fetchArtistTopTracks,
  fetchArtistAlbums,
} from "@/app/store/asyncThunks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/app/store/store";
import ArtistInformation from "../ArtistInformation/ArtistInformation";
import ArtistAlbums from "../ArtistAlbums/ArtistAlbums";
import ArtistTracks from "../ArtistTracks/ArtistTracks";

export default function Artist({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchArtistInfo(params.id));
    dispatch(fetchArtistTopTracks(params.id));
    dispatch(fetchArtistAlbums(params.id));
  }, [dispatch, params.id]);

  const { fetchedArtistInfo, fetchedArtistAlbums, fetchedArtistTopTracks } =
    useSelector((state: RootState) => state.spotifyReducer);

  return (
    <div className={cn(style.artist_page)}>
      <div className={cn(style.artist_page_container)}>
        <ArtistInformation artist={fetchedArtistInfo} />
        <h1>Popular</h1>
        <ArtistTracks tracks={fetchedArtistTopTracks.tracks} />
        <ArtistAlbums album={fetchedArtistAlbums} />
      </div>
    </div>
  );
}
