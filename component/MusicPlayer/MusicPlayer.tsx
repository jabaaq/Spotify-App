import cn from "classnames";
import style from "./MusicPlayer.module.scss";
import testImg from "../../images/HeroSection.jpg";

export default function MusicPlayer() {
  return (
    <div className={cn(style.player)}>
      <div className={cn(style.song)}>
        <img src={testImg.src} alt="Test image" />
        <div className={cn(style.song_details)}>
          <h4>Music Title</h4>
          <p>Artist Name</p>
        </div>
      </div>
      <div className={cn(style.player_settings)}>
        <h1>PLAYER SETTINGS</h1>
      </div>
      <div className={cn(style.volume)}>
        <h1>VOLUME</h1>
      </div>
    </div>
  );
}
