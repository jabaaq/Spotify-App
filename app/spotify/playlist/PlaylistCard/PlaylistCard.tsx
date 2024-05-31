import style from "./PlaylistCard.module.scss";
import cn from "classnames";
import { millisToMinutes } from "@/service/spotifyService";

export default function PlaylistCard({
  num,
  name,
  image,
  artist,
  duration,
  date_added,
}: any) {
  const duration_minutes = millisToMinutes(duration);

  return (
    <div className={cn(style.playlist_card)}>
      {num}
      {image && (
        <img src={image} alt={name} className={cn(style.playlist_card_image)} />
      )}
      <div className={cn(style.track_details)}>
        <p>{name.length < 15 ? name : name.substring(0, 12) + "..."}</p>
        <p>{artist.length < 15 ? artist : artist.substring(0, 12) + "..."}</p>
      </div>
      <p className={cn(style.date_added)}>
        {date_added && date_added.substring(0, 10)}
      </p>
      <p className={cn(style.track_duration)}>{duration_minutes}</p>
    </div>
  );
}
