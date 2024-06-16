import { SongProps } from "@/interfaces/interfaces";
import cn from "classnames";
import style from "./SearchedSongsCard.module.scss";
import { IoPlay } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSelectTrack,
  handleSelectCurrentSongId,
} from "@/app/store/slice";
import SongPlayButton from "@/component/SongPlayButton/SongPlayButton";
import { RootState } from "@/app/store/store";

export default function SearchedSongsCard({
  artist,
  duration,
  id,
  image,
  title,
  preview_url,
  spotify_url,
}: SongProps) {
  const dispatch = useDispatch();

  const { currentSongId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return (
    <div
      className={cn(style.song_container)}
      onClick={() => {
        dispatch(
          handleSelectTrack({
            name: title,
            artist: artist,
            image: image,
            preview: preview_url,
            id: id,
            spotify_url: spotify_url,
          })
        ),
          dispatch(handleSelectCurrentSongId(id));
      }}
    >
      <div className={cn(style.song_image)}>
        <div className={cn(style.play_button, style.hide_button)}>
          <SongPlayButton playSong={id === currentSongId ? true : false} />
          <div className={cn(style.tooltip_text)}>{title}</div>
        </div>
        <img src={image} alt={title} />
      </div>
      <div className={cn(style.song_details)}>
        <div className={cn(style.song_title)}>
          {title.length < 30 ? title : title.substring(0, 30) + "..."}
        </div>
        <div className={cn(style.artist)}>{artist}</div>
      </div>
      <div className={cn(style.duration)}>{duration}</div>
    </div>
  );
}
