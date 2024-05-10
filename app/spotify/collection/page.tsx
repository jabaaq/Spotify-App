import cn from "classnames";
import style from "./Collection.module.scss";
import CollectionPage from "./CollectionPage/CollectionPage";

export default function Collection() {
  return (
    <main className={cn(style.main)}>
      <CollectionPage />
    </main>
  );
}
