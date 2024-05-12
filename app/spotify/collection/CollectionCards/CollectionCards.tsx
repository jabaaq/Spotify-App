import style from "./CollectionCards.module.scss";
import testImg from "../../../../images/HeroSection.jpg";
import cn from "classnames";
import { Playlist } from "@/service/serviceInterfaces";
import withoutImage from "../../../../images/without_image.png";

export default function CollectionCard({
  name,
  description,
  image,
  id,
}: Playlist) {
  return (
    <div className={cn(style.collectionCard)}>
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
