import style from "./CollectionCards.module.scss";
import cn from "classnames";
import { Playlist } from "@/service/serviceInterfaces";
import withoutImage from "../../../../images/without_image.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleGetPlaylistId, handleSelectTrack } from "@/app/store/slice";
import { RootState } from "@/app/store/store";
import Link from "next/link";

export default function CollectionCard({
  name,
  description,
  image,
  id,
  type,
  artist,
  preview_url,
}: Playlist) {
  const dispatch = useDispatch();

  const { selectedPlaylistId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
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
              })
            )
          : dispatch(handleGetPlaylistId(id))
      }
    >
      <div className={cn(style.card_description)}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <img
        src={image ? image : withoutImage.src}
        alt={name}
        className={cn(style.card_image)}
      />
    </Link>
  );
}
