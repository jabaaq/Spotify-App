import style from "./SectionCard.module.scss";
import cn from "classnames";
import { NewReleases } from "@/service/serviceInterfaces";
import Link from "next/link";

const SectionCard = ({ name, artist, image, type, id }: NewReleases) => {
  return (
    <Link
      href={type === "album" ? `/spotify/playlist/${id}` : ""}
      className={cn(style.section_card)}
    >
      <img src={image} alt={name} className={cn(style.card_image)} />
      <div className={cn(style.card_description)}>
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
    </Link>
  );
};

export default SectionCard;
