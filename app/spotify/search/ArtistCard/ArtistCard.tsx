import { Artist, ArtistDetails } from "@/service/serviceInterfaces";
import cn from "classnames";
import style from "./ArtistCard.module.scss";
import noImage from "../../../../images/without_profile.jpg";

export default function ArtistCard({ artist }: Artist) {
  return (
    <div className={cn(style.artist)}>
      <img
        src={artist.image !== null ? artist.image : noImage.src}
        // src={artist.image}
        alt={artist.name}
        className={cn(style.artist_image)}
      />
      <div className={cn(style.artist_details)}>
        <h5>
          {artist.name.length < 15
            ? artist.name
            : artist.name.substring(0, 15) + "..."}
        </h5>
        <p>Artist</p>
      </div>
    </div>
  );
}
