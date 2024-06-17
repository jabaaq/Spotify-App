import cn from "classnames";
import style from "./HeroSectionCard.module.scss";
import heroSection from "../../../../images/HeroSection.jpg";
import { Playlist } from "@/service/serviceInterfaces";
import Button from "@/component/Button/Button";

const HeroSectionCard = ({
  name,
  image,
  id,
  description,
  scrollTo,
}: Playlist) => {
  return (
    <div className={cn(style.heroSection_container)}>
      <div className={cn(style.section_description)}>
        <h2>SPOTIFY WAVE</h2>
        <p>
          Be the first to hear new tracks, connect directly with fellow fans and
          your favorite artists in real time, and support the future of music
          with every play.
        </p>
        <h3>Welcome, {name}!</h3>
        <Button appearance={"start"} onClick={scrollTo}>
          Let's Start
        </Button>
      </div>
      <img src={heroSection.src} alt="HeroSection" loading="lazy" />
    </div>
  );
};

export default HeroSectionCard;
