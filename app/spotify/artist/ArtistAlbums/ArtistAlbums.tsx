import { Album } from "@/service/serviceInterfaces";
import style from "./ArtistAlbums.module.scss";
import cn from "classnames";

export default function ArtistAlbums({ album }: Album): JSX.Element {
  return <div className={cn(style.artist_albums)}>ArtistAlbums</div>;
}
