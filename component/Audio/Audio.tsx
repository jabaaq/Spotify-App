"use client";
import "./Audio.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

export default function Audio() {
  return (
    <div className="audio_container">
      <AudioPlayer
        autoPlayAfterSrcChange={true}
        showFilledVolume={true}
        src="https://p.scdn.co/mp3-preview/750da82d08dd4f1840d4d37032473167cdd3033b?cid=25db49bc2848486cb4cca9bb844fa3c1"
        showSkipControls={false}
      />
    </div>
  );
}
