import styles from "./ChartCard.module.scss";
import cn from "classnames";
import { Track } from "@/service/serviceInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { handleSelectTrack } from "@/app/store/slice";
import Image from "next/image";
import { handleSelectCurrentSongId } from "@/app/store/slice";
import SongPlayButton from "@/component/SongPlayButton/SongPlayButton";
import { RootState } from "@/app/store/store";

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

  const { currentSongId } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

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
    <div
      className={cn(styles.chartCard)}
      onClick={() => {
        handleCLick(), dispatch(handleSelectCurrentSongId(id));
      }}
    >
      <Image src={image} alt={title} loading="lazy" width={65} height={65} />
      <div className={cn(styles.chartCard_description)}>
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default ChartCard;
