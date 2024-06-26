import styles from "./ChartCard.module.scss";
import cn from "classnames";
import Checkbox from "@/component/Checkbox/Checkbox";
import { Track } from "@/service/serviceInterfaces";
import { useDispatch } from "react-redux";
import { handleSelectTrack } from "@/app/store/slice";
import Image from "next/image";

const ChartCard = ({
  title,
  image,
  artist,
  duration,
  preview_url,
  id,
  spotify_url,
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
        spotify_url: spotify_url,
      })
    );
  };

  return (
    <div className={cn(styles.chartCard)} onClick={handleCLick}>
      <Image src={image} alt={title} loading="lazy" width={65} height={65} />
      <div className={styles.chartCard_description}>
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{duration}</p>
      </div>
      <Checkbox />
    </div>
  );
};

export default ChartCard;
