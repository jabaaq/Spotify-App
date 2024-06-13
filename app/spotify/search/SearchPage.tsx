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
import SectionCard from "@/component/SectionCard/SectionCard";
import { ArtistDetails } from "@/service/serviceInterfaces";
import { useSize } from "@/component/Navbar/NavbarSearch/hooks";

const {
  _transferTracks,
  _transferArtists,
  _transferAlbums,
  _transferPlaylists,
} = spotifyService();

export default function SearchPage() {
  const { fetchSearchedItems } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  const { itemsNum } = useSize();
  const { artists, albums, tracks, playlists } = fetchSearchedItems;

  //To transfer the searched data
  const transferredTracks: Song = tracks && tracks.items.map(_transferTracks);
  const transferredArtists = artists && artists.items.map(_transferArtists);
  const transferAlbums = albums && albums.items.map(_transferAlbums);
  const transferPlaylists =
    playlists && playlists.items.map(_transferPlaylists);

  useEffect(() => {
    console.log(transferredTracks);
  }, [transferredTracks]);

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
      {transferAlbums ? <h1>Albums</h1> : null}
      <div className={cn(style.albums_container)}>
        {transferAlbums &&
          transferAlbums
            .slice(0, itemsNum)
            .map((album: any) => (
              <SectionCard
                key={album.id}
                artist={album.artist}
                id={album.id}
                type={"album"}
                image={album.image}
                name={
                  album.name.length < 20
                    ? album.name
                    : album.name.substring(0, 20) + "..."
                }
              />
            ))}
      </div>
      {transferPlaylists ? <h1>Playlists</h1> : null}
      <div className={cn(style.playlist_container)}>
        {transferPlaylists &&
          transferPlaylists
            .slice(0, itemsNum)
            .map((playlist: any) => (
              <SectionCard
                key={playlist.id}
                artist={playlist.artist}
                id={playlist.id}
                type={"playlist"}
                image={playlist.image}
                name={
                  playlist.name.length < 20
                    ? playlist.name
                    : playlist.name.substring(0, 20) + "..."
                }
              />
            ))}
      </div>
    </div>
  );
}
