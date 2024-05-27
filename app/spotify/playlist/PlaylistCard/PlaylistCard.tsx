import style from "./PlaylistCard.module.scss";
import cn from "classnames";
import testImage from "../../../../images/playlistTestImage.webp";
import { AiOutlineDelete } from "react-icons/ai";

export default function PlaylistCard() {
  return (
    <div className={cn(style.playlist_card)}>
      <img
        src={testImage.src}
        alt="Test image"
        className={cn(style.playlist_card_image)}
      />
      <div className={cn(style.track_details)}>
        <p>The Track Title</p>
        <p>Artist Name</p>
      </div>
      <div className={cn(style.track_duration)}>
        <p>4:13</p>
        <div className={cn(style.track_delete)}>
          <AiOutlineDelete size={20} />
        </div>
      </div>
    </div>
  );
}
