import style from "./ArtistTracks.module.scss";
import cn from "classnames";

export default function ArtistTracks({ track }: any) {
  return <div className={cn(style.artist_tracks)}>ArtistTracks</div>;
}
