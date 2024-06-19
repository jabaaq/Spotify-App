import style from "./PlaylistCard.module.scss";
import cn from "classnames";
import { millisToMinutes } from "@/service/spotifyService";
import {
  handleSelectCurrentSongId,
  handleSelectTrack,
} from "@/app/store/slice";
import { useDispatch, useSelector } from "react-redux";
import SongPlayButton from "@/component/SongPlayButton/SongPlayButton";
import { useEffect, useState } from "react";
import { RootState } from "@/app/store/store";
import { useSize } from "@/component/Navbar/NavbarSearch/hooks";

export default function PlaylistCard({
  num,
  name,
  image,
  artist,
  duration,
  date_added,
  preview_url,
  id,
  spotify_url,
}: any) {
  const [showPlayButton, setShowPlayButton] = useState(false);

  const dispatch = useDispatch();
  const duration_minutes = millisToMinutes(duration);

  const { currentSongId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  const { screenY } = useSize();

  const handleMouseEnter = () => {
    setShowPlayButton(true);
  };
  const handleMouseLeave = () => {
    setShowPlayButton(false);
  };

  const handleClick = () => {
    dispatch(
      handleSelectTrack({
        name: name,
        artist: artist,
        image: image,
        preview: preview_url,
        id: id,
        spotify_url: spotify_url,
      })
    );
  };

  return (
    <div
      className={cn(style.playlist_card)}
      onClick={() => {
        dispatch(handleSelectCurrentSongId(id)), handleClick();
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(style.num_button)}>
        {showPlayButton ? (
          <SongPlayButton playSong={currentSongId === id} />
        ) : (
          num
        )}
      </div>

      {image && (
        <img src={image} alt={name} className={cn(style.playlist_card_image)} />
      )}
      <div className={cn(style.track_details)}>
        <p className={cn(style.track_title)}>
          {name.length < 12 ? name : name.substring(0, 12) + "..."}
        </p>
        <p className={cn(style.track_artist)}>
          {artist && artist.length > 12
            ? artist.substring(0, 12) + "..."
            : artist}
        </p>
      </div>
      <p className={cn(style.date_added)}>
        {screenY > 720 ? date_added && date_added.substring(0, 10) : null}
      </p>
      <p className={cn(style.track_duration)}>{duration_minutes}</p>
    </div>
  );
}
