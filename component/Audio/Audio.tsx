"use client";
import "./Audio.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

export default function Audio({ preview }: any): JSX.Element {
  return (
    <div className="audio_container">
      <AudioPlayer
        autoPlayAfterSrcChange={true}
        showFilledVolume={true}
        src={preview && preview}
        showSkipControls={false}
      />
    </div>
  );
}
