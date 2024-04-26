"use client";
import { useAuth } from "@/app/useAuth";
import cn from "classnames";
import style from "./Collection.module.scss";
import Login from "@/component/Login/Login";
import CollectionPage from "./CollectionPage/CollectionPage";

const Collection = (): JSX.Element => {
  const token = useAuth();

  return (
    <main className={cn(style.main)}>
      <CollectionPage />
      {/* {token ? <CollectionPage /> : <Login />} */}
    </main>
  );
};

export default Collection;
