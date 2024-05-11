"use client";
import cn from "classnames";
import style from "./CollectionPage.module.scss";
import RadioButtons from "@/component/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import { fetchUserPlaylist } from "@/app/store/asyncThunks";
import CollectionCards from "../CollectionCards/CollectionCards";

const CollectionPage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { fetchedPlaylist } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    dispatch(fetchUserPlaylist());
  }, []);

  useEffect(() => {
    console.log("fetchedPlaylist", fetchedPlaylist);
  }, [fetchedPlaylist]);

  return (
    <div className={cn(style.collections)}>
      <div className={cn(style.radioButtonsContainer)}>
        <RadioButtons />
      </div>
      <div className={cn(style.collectionCardsContainer)}>
        <CollectionCards />
        <CollectionCards />
        <CollectionCards />
        <CollectionCards />
      </div>
    </div>
  );
};

export default CollectionPage;
