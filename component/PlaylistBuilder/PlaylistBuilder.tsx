import cn from "classnames";
import style from "./PlaylistBuilder.module.scss";
import PlaylistCard from "@/app/spotify/playlist/PlaylistCard/PlaylistCard";

export default function PlaylistBuilder({
  image,
  name,
  id,
  total_tracks,
  tracks,
  release_date,
  description,
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
          <h1 className={cn(style.playlist_title)}>{name}</h1>
          <p className={cn(style.playlist_description)}>{description}</p>
          <p>{total_tracks} Songs</p>
        </div>
      </div>
      <div className={cn(style.playlist_tracks_container)}>
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </div>
  );
}
