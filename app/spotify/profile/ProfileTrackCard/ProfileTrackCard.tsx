import cn from "classnames";
import style from "./ProfileTrackCard.module.scss";
import { FaPlay } from "react-icons/fa";
import { Track } from "@/service/serviceInterfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSelectCurrentSongId,
  handleSelectTrack,
} from "@/app/store/slice";
import SongPlayButton from "@/component/SongPlayButton/SongPlayButton";
import { RootState } from "@/app/store/store";
import { useEffect, useState } from "react";

export default function ProfileTrackCard({
  artist,
  duration,
  id,
  image,
  title,
  position,
  preview_url,
  spotify_url,
}: Track) {
  const dispatch = useDispatch();
  const { currentSongId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  const [showPlayButton, setShowPlayButton] = useState(false);

  const handleMouseEnter = () => {
    setShowPlayButton(true);
  };
  const handleMouseLeave = () => {
    setShowPlayButton(false);
  };

  const handleClick = () => {
    dispatch(
      handleSelectTrack({
        name: title,
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
      className={cn(style.track_card)}
      onClick={() => {
        handleClick(), dispatch(handleSelectCurrentSongId(id));
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(style.about_track)}>
        <div className={cn(style.num_PlayButton)}>
          {showPlayButton ? (
            <SongPlayButton playSong={id === currentSongId ? true : false} />
          ) : (
            <h3 className={cn(style.track_number)}>{position}</h3>
          )}
        </div>
        <img
          src={image}
          className={cn(style.track_image)}
          alt={title}
          loading="lazy"
        />
        <div className={cn(style.track_details)}>
          <h3 className={cn(style.track_title)}>
            {title.length < 20 ? title : title.substring(0, 20) + "..."}
          </h3>
          <p className={cn(style.track_artist)}>{artist}</p>
        </div>
      </div>
      <p className={cn(style.track_duration)}>{duration}</p>
    </div>
  );
}
