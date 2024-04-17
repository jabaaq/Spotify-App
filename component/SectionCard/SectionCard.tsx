import style from "./SectionCard.module.scss";
import cn from "classnames";
import testImg from "../../testImages/heroSection.jpeg";
import { NewReleases } from "@/service/serviceInterfaces";

const SectionCard = ({ name, artist, image }: NewReleases) => {
  return (
    <div className={cn(style.section_card)}>
      <img src={image} alt={name} className={cn(style.card_image)} />
      <div className={cn(style.card_description)}>
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default SectionCard;
