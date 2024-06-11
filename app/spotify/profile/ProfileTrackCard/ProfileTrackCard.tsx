import cn from "classnames";
import style from "./ProfileTrackCard.module.scss";
import testImg from "../../../../images/without_profile.jpg";
import { FaPlay } from "react-icons/fa";
import { Track } from "@/service/serviceInterfaces";
import { useDispatch } from "react-redux";
import { handleSelectTrack } from "@/app/store/slice";

export default function ProfileTrackCard({
  artist,
  duration,
  id,
  image,
  title,
  position,
  preview_url,
}: Track) {
  const dispatch = useDispatch();
  return (
    <div
      className={cn(style.track_card)}
      onClick={() =>
        dispatch(
          handleSelectTrack({
            name: title,
            artist: artist,
            image: image,
            preview: preview_url,
            id: id,
          })
        )
      }
    >
      <div className={cn(style.about_track)}>
        <FaPlay size={12} />
        <h3 className={cn(style.track_number)}>{position}</h3>
        <img src={image} className={cn(style.track_image)} alt={title} />
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
