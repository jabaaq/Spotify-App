"use client";
import style from "./ArtistPage.module.scss";
import cn from "classnames";
import {
  fetchArtistInfo,
  fetchArtistTopTracks,
  fetchArtistAlbums,
} from "@/app/store/asyncThunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "@/app/store/store";

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
  }, []);

  return <div className={cn(style.artist_page)}>{params.id}</div>;
}
