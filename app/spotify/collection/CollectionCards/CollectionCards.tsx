import style from "./CollectionCards.module.scss";
import cn from "classnames";
import { Playlist } from "@/service/serviceInterfaces";
import withoutImage from "../../../../images/without_image.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { handleGetPlaylistId, handleSelectTrack } from "@/app/store/slice";

import Link from "next/link";

export default function CollectionCard({
  name,
  description,
  image,
  id,
  type,
  artist,
  preview_url,
  spotify_url,
}: Playlist) {
  const dispatch = useDispatch();

  return (
    <Link
      href={type === "playlist" ? `/spotify/playlist/${id}` : ""}
      className={cn(style.collectionCard)}
      onClick={() =>
        type === "track"
          ? dispatch(
              handleSelectTrack({
                name: name,
                artist: artist,
                image: image,
                preview: preview_url,
                id: id,
                spotify_url: spotify_url,
              })
            )
          : dispatch(handleGetPlaylistId(id))
      }
    >
      <div className={cn(style.card_description)}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <Image
        src={image ? image : withoutImage.src}
        alt={name || "Collection Card"}
        className={cn(style.artist_image)}
        loading="lazy"
        width={200}
        height={200}
      />
    </Link>
  );
}
