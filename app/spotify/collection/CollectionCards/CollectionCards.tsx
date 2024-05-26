import style from "./CollectionCards.module.scss";
import cn from "classnames";
import { Playlist } from "@/service/serviceInterfaces";
import withoutImage from "../../../../images/without_image.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleGetPlaylistId } from "@/app/store/slice";
import { RootState } from "@/app/store/store";

export default function CollectionCard({
  name,
  description,
  image,
  id,
}: Playlist) {
  const dispatch = useDispatch();

  const { selectedPlaylistId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    console.log(selectedPlaylistId);
  }, [selectedPlaylistId]);

  return (
    <div
      className={cn(style.collectionCard)}
      onClick={() => dispatch(handleGetPlaylistId(id))}
    >
      <div></div>
      <div className={cn(style.card_description)}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <img
        src={image ? image : withoutImage.src}
        alt={name}
        className={cn(style.card_image)}
      />
    </div>
  );
}
