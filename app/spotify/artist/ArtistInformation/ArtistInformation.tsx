import { Artist } from "@/service/serviceInterfaces";
import style from "./ArtistInformation.module.scss";
import cn from "classnames";

export default function ArtistInformation({ artist }: Artist) {
  const { id, followers, name, image } = artist;
  return <div className={cn(style.artist_information)}>{name}</div>;
}
