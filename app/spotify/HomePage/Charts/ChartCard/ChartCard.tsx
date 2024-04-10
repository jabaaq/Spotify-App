import styles from "./ChartCard.module.scss";
import cn from "classnames";
import testImg from "../../../../../testImages/heroSection.jpeg";

const ChartCard = () => {
  return (
    <div className={cn(styles.chartCard)}>
      <img src={testImg.src} alt="Test Image" />
      <div className={styles.chartCard_description}>
        {/* need to create the tag components */}
        <h3>Music Title</h3>
        <p>Artist Name</p>
        <p>2:34:45</p>
      </div>
    </div>
  );
};

export default ChartCard;