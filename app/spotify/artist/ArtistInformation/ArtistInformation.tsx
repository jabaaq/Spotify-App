import { Artist } from "@/service/serviceInterfaces";
import style from "./ArtistInformation.module.scss";
import cn from "classnames";
import Image from "next/image";

export default function ArtistInformation({ artist }: Artist) {
  const { id, followers, name, image } = artist;
  return (
    <div className={cn(style.artist_information)}>
      <Image
        src={image}
        alt={name}
        className={cn(style.artist_image)}
        loading="lazy"
        width={200}
        height={200}
      />

      <div className={cn(style.artist_info)}>
        <h1>{name}</h1>
        <p>{followers} followers</p>
      </div>
    </div>
  );
}
