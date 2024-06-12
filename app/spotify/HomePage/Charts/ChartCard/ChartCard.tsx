import styles from "./ChartCard.module.scss";
import cn from "classnames";
import Checkbox from "@/component/Checkbox/Checkbox";
import { Track } from "@/service/serviceInterfaces";
import { useDispatch } from "react-redux";
import { handleSelectTrack } from "@/app/store/slice";

const ChartCard = ({
  title,
  image,
  artist,
  duration,
  preview_url,
  id,
}: Track): JSX.Element => {
  const dispatch = useDispatch();

  const handleCLick = () => {
    dispatch(
      handleSelectTrack({
        name: title,
        artist: artist,
        image: image,
        preview: preview_url,
        id: id,
      })
    );
  };

  return (
    <div className={cn(styles.chartCard)} onClick={handleCLick}>
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
