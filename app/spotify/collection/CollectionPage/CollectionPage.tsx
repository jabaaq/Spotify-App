"use client";
import cn from "classnames";
import style from "./CollectionPage.module.scss";
import RadioButtons from "@/component/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import { fetchUserPlaylist } from "@/app/store/asyncThunks";

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
    <div className={cn(style.playlist)}>
      <div className={cn(style.radioButtonsContainer)}>
        <RadioButtons />
      </div>
      <h1>PlaylistPage</h1>
      <h1>PlaylistPage</h1>
      <h1>PlaylistPage</h1>
    </div>
  );
};

export default CollectionPage;
