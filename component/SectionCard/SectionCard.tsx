import style from "./SectionCard.module.scss";
import cn from "classnames";
import { NewReleases } from "@/service/serviceInterfaces";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handleSelectTrack } from "@/app/store/slice";

const SectionCard = ({
  name,
  artist,
  image,
  type,
  id,
  preview_url,
  spotify_url,
}: NewReleases) => {
  const dispatch = useDispatch();

  const handleCLick = (e: { preventDefault: () => void }) => {
    if (type === "track") {
      e.preventDefault();
      dispatch(
        handleSelectTrack({
          name: name,
          artist: artist,
          image: image,
          preview: preview_url,
          id: id,
          spotify_url: spotify_url,
        })
      );
    }
  };

  return (
    <Link
      onClick={handleCLick}
      href={
        type === "single" ? `/spotify/album/${id}` : `/spotify/${type}/${id}`
      }
      className={cn(style.section_card)}
    >
      <img
        src={image}
        alt={name}
        className={cn(style.card_image)}
        loading="lazy"
      />
      <div className={cn(style.card_description)}>
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
    </Link>
  );
};

export default SectionCard;
