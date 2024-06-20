"use client";
import { useEffect } from "react";
import style from "./ArtistTracks.module.scss";
import cn from "classnames";
import PlaylistCard from "../../playlist/PlaylistCard/PlaylistCard";
import ProfileTrackCard from "../../profile/ProfileTrackCard/ProfileTrackCard";

export default function ArtistTracks({ tracks }: any) {
  useEffect(() => {
    console.log("---", tracks);
  }, [tracks]);

  return (
    <div className={cn(style.artist_tracks)}>
      {tracks &&
        tracks.map((track: any, i: number) => (
          <PlaylistCard
            key={i}
            num={i + 1}
            name={track.name}
            image={track.album.images[1] ? track.album.images[1].url : null}
            spotify_url={track.external_urls.spotify}
            id={track.id}
            artist={track.artists[0].name}
            duration={track.duration_ms}
            preview_url={track.preview_url}
          />
        ))}
    </div>
  );
}
