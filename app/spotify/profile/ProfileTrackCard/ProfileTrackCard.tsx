import cn from "classnames";
import style from "./ProfileTrackCard.module.scss";
import testImg from "../../../../images/without_profile.jpg";
import { FaPlay } from "react-icons/fa";

export default function ProfileTrackCard() {
  return (
    <div className={cn(style.track_card)}>
      <div className={cn(style.about_track)}>
        <FaPlay />
        <h3 className={cn(style.track_number)}>1</h3>
        <img
          src={testImg.src}
          className={cn(style.track_image)}
          alt="Test image"
        />
        <div className={cn(style.track_details)}>
          <h3 className={cn(style.track_title)}>Track Title</h3>
          <p className={cn(style.track_artist)}>Artist Name</p>
        </div>
      </div>
      <p className={cn(style.track_duration)}>4:32</p>
    </div>
  );
}
