"use client";
import style from "./Audio.module.scss";
import cn from "classnames";
import "./Audio.css";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import "react-h5-audio-player/src/styles.scss";

export default function Audio() {
  return (
    <div className="audio_container">
      <AudioPlayer
        autoPlayAfterSrcChange={true}
        showFilledVolume={true}
        src="https://p.scdn.co/mp3-preview/2b30f2512af94d45733f5535ac48caa3b541c7f1?cid=25db49bc2848486cb4cca9bb844fa3c1"
        showSkipControls={false}
      />
    </div>
  );
}
