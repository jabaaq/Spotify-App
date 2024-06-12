import style from "./PlaylistCard.module.scss";
import cn from "classnames";
import { millisToMinutes } from "@/service/spotifyService";
import { handleSelectTrack } from "@/app/store/slice";
import { useDispatch } from "react-redux";

export default function PlaylistCard({
  num,
  name,
  image,
  artist,
  duration,
  date_added,
  preview_url,
  id,
}: any) {
  const dispatch = useDispatch();
  const duration_minutes = millisToMinutes(duration);

  return (
    <div
      className={cn(style.playlist_card)}
      onClick={() =>
        dispatch(
          handleSelectTrack({
            name: name,
            artist: artist,
            image: image,
            preview: preview_url,
            id: id,
          })
        )
      }
    >
      {num}
      {image && (
        <img src={image} alt={name} className={cn(style.playlist_card_image)} />
      )}
      <div className={cn(style.track_details)}>
        <p>{name.length < 15 ? name : name.substring(0, 12) + "..."}</p>
        <p>
          {artist && artist.length > 12
            ? artist.substring(0, 12) + "..."
            : artist}
        </p>
      </div>
      <p className={cn(style.date_added)}>
        {date_added && date_added.substring(0, 10)}
      </p>
      <p className={cn(style.track_duration)}>{duration_minutes}</p>
    </div>
  );
}
