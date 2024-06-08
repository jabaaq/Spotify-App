"use client";
import cn from "classnames";
import style from "./SearchPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/app/store/store";
import spotifyService from "@/service/spotifyService";
import { Song } from "@/interfaces/interfaces";
import Songs from "./Songs/Songs";
import ArtistCard from "./ArtistCard/ArtistCard";
import { ArtistDetails } from "@/service/serviceInterfaces";
import { useSize } from "@/component/Navbar/NavbarSearch/hooks";

const { _transferTracks, _transferArtists } = spotifyService();

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchSearchedItems } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  const { itemsNum } = useSize();
  const { artists, albums, tracks, playlists } = fetchSearchedItems;
  const transferredTracks: Song = tracks && tracks.items.map(_transferTracks);
  const transferredArtists = artists && artists.items.map(_transferArtists);

  useEffect(() => {
    console.log("Information from the SearchPage - ", fetchSearchedItems);
  }, [fetchSearchedItems]);

  // useEffect(() => {
  //   console.log(transferredArtists);
  // }, [transferredArtists]);

  return (
    <div className={cn(style.search_container)}>
      {transferredTracks ? <h1>Songs</h1> : null}
      <div className={cn(style.songs_container)}>
        {transferredTracks &&
          transferredTracks.map((song: any) => (
            <Songs key={song.key} song={song} />
          ))}
      </div>
      {transferredArtists ? <h1>Artists</h1> : null}
      <div className={cn(style.artist_container)}>
        {transferredArtists &&
          transferredArtists
            .slice(0, itemsNum)
            .map((artist: ArtistDetails) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
      </div>
    </div>
  );
}
