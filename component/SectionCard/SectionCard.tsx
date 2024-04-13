import style from "./SectionCard.module.scss";
import cn from "classnames";
import testImg from "../../testImages/heroSection.jpeg";

const SectionCard = () => {
  return (
    <div className={cn(style.section_card)}>
      <img
        src={testImg.src}
        alt="TEST IMAGE"
        className={cn(style.card_image)}
      />
      <div className={cn(style.card_description)}>
        <h3>Music Title</h3>
        <p>The Artist</p>
      </div>
    </div>
  );
};

export default SectionCard;
