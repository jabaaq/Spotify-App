import { Artist } from "@/service/serviceInterfaces";
import style from "./ArtistInformation.module.scss";
import cn from "classnames";

export default function ArtistInformation({ artist }: Artist) {
  const { id, followers, name, image } = artist;
  return (
    <div className={cn(style.artist_information)}>
      <img src={image} alt={name} className={cn(style.artist_image)} />
      <div className={cn(style.artist_info)}>
        <h1>{name}</h1>
        <p>{followers} followers</p>
      </div>
    </div>
  );
}
