"use client";
import style from "./Audio.module.scss";
import cn from "classnames";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import "react-h5-audio-player/src/styles.scss";

export default function Audio() {
  return (
    <div className={cn(style.audio_container)}>
      {/* <audio
        src="https://p.scdn.co/mp3-preview/2b30f2512af94d45733f5535ac48caa3b541c7f1?cid=25db49bc2848486cb4cca9bb844fa3c1"
        controls
      ></audio> */}
      <AudioPlayer
        autoPlay
        src="https://p.scdn.co/mp3-preview/2b30f2512af94d45733f5535ac48caa3b541c7f1?cid=25db49bc2848486cb4cca9bb844fa3c1"
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
      />
    </div>
  );
}
