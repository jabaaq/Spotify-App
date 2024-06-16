import cn from "classnames";
import style from "./WithoutPreview.module.scss";
import { WithoutPreviewProps } from "@/service/serviceInterfaces";

const WithoutPreview = ({ spotify_url }: WithoutPreviewProps): JSX.Element => {
  return (
    <div className={cn(style.without_preview)}>
      <p>
        Preview not available. Check it out on
        <a href={spotify_url} target="_blank">
          Spotify
        </a>
      </p>
    </div>
  );
};

export default WithoutPreview;
