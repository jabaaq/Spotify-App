"use client";
import cn from "classnames";
import style from "./Collection.module.scss";
import CollectionPage from "./CollectionPage/CollectionPage";

const Collection = (): JSX.Element => {
  return (
    <main className={cn(style.main)}>
      <CollectionPage />
    </main>
  );
};

export default Collection;
