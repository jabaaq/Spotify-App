import { Song } from "@/interfaces/interfaces";
import style from "./Songs.module.scss";
import cn from "classnames";
import SearchedSongsCard from "./SearchedSongsCard/SearchedSongsCard";

export default function Songs({ song }: Song) {
  return (
    <div className={cn(style.searched_songs_container)}>
      <SearchedSongsCard
        artist={song.artist}
        duration={song.duration}
        id={song.id}
        image={song.image}
        title={song.title}
        preview_url={song.preview_url}
        spotify_url={song.spotify_url}
      />
    </div>
  );
}
