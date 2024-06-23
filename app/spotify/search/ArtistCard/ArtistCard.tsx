import { Artist, ArtistDetails } from "@/service/serviceInterfaces";
import cn from "classnames";
import style from "./ArtistCard.module.scss";
import noImage from "../../../../images/without_profile.jpg";
import Link from "next/link";
import Image from "next/image";

export default function ArtistCard({ artist }: Artist) {
  return (
    <Link href={`/spotify/artist/${artist.id}`} className={cn(style.artist)}>
      <Image
        src={artist.image !== null ? artist.image : noImage.src}
        alt={artist.name}
        className={cn(style.artist_image)}
        width={150}
        height={150}
        quality={100}
      />

      <div className={cn(style.artist_details)}>
        <h5>
          {artist.name.length < 15
            ? artist.name
            : artist.name.substring(0, 15) + "..."}
        </h5>
        <p>Artist</p>
      </div>
    </Link>
  );
}
