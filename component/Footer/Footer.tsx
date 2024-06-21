"use client";
import { useSelector } from "react-redux";
import cn from "classnames";
import style from "./Footer.module.scss";
import SocialMedias from "./SocialMedias/SocialMedias";
import { RootState } from "@/app/store/store";

export default function Footer(): JSX.Element {
  const { openPlayer } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return (
    <footer
      className={cn(style.footer_container, {
        [style.footer_lift_up]: openPlayer,
      })}
    >
      <h1>MusicWave</h1>
      <SocialMedias />
    </footer>
  );
}
