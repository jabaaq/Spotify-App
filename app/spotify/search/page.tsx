import cn from "classnames";
import style from "./SearchPage.module.scss";
import SearchPage from "./SearchPage";

export default function Search() {
  return (
    <div className={cn(style.main)}>
      <SearchPage />
    </div>
  );
}
