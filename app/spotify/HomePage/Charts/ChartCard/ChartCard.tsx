import styles from "./ChartCard.module.scss";
import cn from "classnames";
import testImg from "../../../../../testImages/heroSection.jpeg";
import Checkbox from "@/component/Checkbox/Checkbox";
import { Track } from "@/service/serviceInterfaces";

const ChartCard = ({ title, image, artist, duration }: Track): JSX.Element => {
  return (
    <div className={cn(styles.chartCard)}>
      <img src={image} alt="Test Image" />
      <div className={styles.chartCard_description}>
        {/* need to create the tag components */}
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{duration}</p>
      </div>
      <Checkbox children={null}></Checkbox>
    </div>
  );
};

export default ChartCard;
