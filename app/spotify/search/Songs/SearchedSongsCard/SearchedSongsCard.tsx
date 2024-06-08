import { SongProps } from "@/interfaces/interfaces";
import cn from "classnames";
import style from "./SearchedSongsCard.module.scss";
import { IoPlay } from "react-icons/io5";

export default function SearchedSongsCard({
  artist,
  duration,
  id,
  image,
  title,
}: SongProps) {
  return (
    <div className={cn(style.song_container)}>
      <div className={cn(style.song_image)}>
        <div className={cn(style.play_button, style.hide_button)}>
          <IoPlay size={20} />
          <div className={cn(style.tooltip_text)}>{title}</div>
        </div>
        <img src={image} alt={title} />
      </div>
      <div className={cn(style.song_details)}>
        <div className={cn(style.song_title)}>
          {title.length < 55 ? title : title.substring(0, 55) + "..."}
        </div>
        <div className={cn(style.artist)}>{artist}</div>
      </div>
      <div className={cn(style.duration)}>{duration}</div>
    </div>
  );
}
