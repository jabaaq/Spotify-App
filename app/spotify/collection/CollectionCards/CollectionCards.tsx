import style from "./CollectionCards.module.scss";
import cn from "classnames";
import { Playlist } from "@/service/serviceInterfaces";
import withoutImage from "../../../../images/without_image.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleGetPlaylistId } from "@/app/store/slice";
import { RootState } from "@/app/store/store";
import Link from "next/link";

export default function CollectionCard({
  name,
  description,
  image,
  id,
  type,
}: Playlist) {
  const dispatch = useDispatch();

  const { selectedPlaylistId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    console.log(selectedPlaylistId);
  }, [selectedPlaylistId]);

  return (
    <Link
      href={type === "playlist" ? `/spotify/playlist/${id}` : ""}
      className={cn(style.collectionCard)}
      onClick={() => dispatch(handleGetPlaylistId(id))}
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
