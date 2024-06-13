"use client";
import cn from "classnames";
import style from "./MusicPlayer.module.scss";
import testImg from "../../images/HeroSection.jpg";
import Audio from "../Audio/Audio";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";

export default function MusicPlayer() {
  const { selectedTrack } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  const { artist, id, image, name, preview } = selectedTrack;

  useEffect(() => {
    console.log(selectedTrack);
  }, [selectedTrack]);

  return (
    <div className={cn(style.player)}>
      <div className={cn(style.song)}>
        {image ? <img src={image} alt={name} /> : null}
        <div className={cn(style.song_details)}>
          <h4>{name}</h4>
          <p>{artist}</p>
        </div>
      </div>
      <div className={cn(style.player_settings)}>
        {preview ? <Audio preview={preview} /> : <h1>Oops...</h1>}
      </div>
    </div>
  );
}
