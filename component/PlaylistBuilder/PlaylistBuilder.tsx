import cn from "classnames";
import style from "./PlaylistBuilder.module.scss";
import PlaylistCard from "@/app/spotify/playlist/PlaylistCard/PlaylistCard";
import { LuDot } from "react-icons/lu";

export default function PlaylistBuilder({
  image,
  name,
  id,
  total_tracks,
  tracks,
  description,
  playlist_owner_name,
  playlist_owner_href,
  playlist_owner_followers,
  type,
  artist,
  artist_url,
  release_date,
}: any) {
  return (
    <div
      className={cn(style.playlist)}
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.616) 10%, var(--dark)),
      url(${image}) no-repeat center/cover`,
      }}
    >
      <div className={cn(style.playlist_container)}>
        <img src={image} alt={name} className={cn(style.playlist_image)} />
        <div className={cn(style.playlist_details)}>
          <h5>{type}</h5>
          <h1 className={cn(style.playlist_title)}>{name}</h1>
          {type === "Playlist" ? (
            <div className={cn(style.playlist_owner_information)}>
              <a
                href={playlist_owner_href}
                target="_blank"
                className={cn(style.owner_name)}
              >
                {playlist_owner_name}
              </a>
              <LuDot size={20} />
              <span>{playlist_owner_followers} likes</span>
              <LuDot size={20} />
              <p>{total_tracks} Songs</p>
            </div>
          ) : (
            <div className={cn(style.playlist_owner_information)}>
              <a
                href={artist_url}
                target="_blank"
                className={cn(style.owner_name)}
              >
                {artist}
              </a>
              <LuDot size={20} />
              <span>{release_date}</span>
              <LuDot size={20} />
              <p>{total_tracks} Songs</p>
            </div>
          )}
        </div>
      </div>
      <div className={cn(style.playlist_tracks_container)}>
        {type === "Playlist" ? (
          <>
            {tracks &&
              tracks.map((track: any, i: number) => {
                return (
                  <PlaylistCard
                    key={track.track.id}
                    num={i + 1}
                    name={track.track.name}
                    image={track.track.album.images[1].url}
                    id={track.track.id}
                    artist={track.track.artists[0].name}
                    duration={track.track.duration_ms}
                    date_added={track.added_at}
                  />
                );
              })}
          </>
        ) : (
          <>
            {tracks &&
              tracks.map((track: any, i: number) => {
                return (
                  <PlaylistCard
                    key={track.id}
                    num={i + 1}
                    name={track.name}
                    id={track.id}
                    artist={track.artists[0].name}
                    duration={track.duration_ms}
                  />
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}
