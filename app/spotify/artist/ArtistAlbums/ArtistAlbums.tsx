import { Album } from "@/service/serviceInterfaces";
import style from "./ArtistAlbums.module.scss";
import cn from "classnames";
import SectionBuilder from "@/component/SectionBuilder/SectionBuilder";

export default function ArtistAlbums({ album }: Album): JSX.Element {
  return (
    <div className={cn(style.artist_albums)}>
      <SectionBuilder sectionName={"Album"} data={album} />
    </div>
  );
}
