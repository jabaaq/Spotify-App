"use client";
import cn from "classnames";
import style from "./CollectionPage.module.scss";
import RadioButtons from "@/component/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import { fetchUserPlaylist, fetchLikedSongs } from "@/app/store/asyncThunks";
import CollectionCard from "../CollectionCards/CollectionCards";

const CollectionPage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedRadioButton, fetchedCollectionPageInformation } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    console.log(selectedRadioButton);
    selectedRadioButton === "collection"
      ? dispatch(fetchUserPlaylist())
      : dispatch(fetchLikedSongs());
  }, [selectedRadioButton]);

  return (
    <div className={cn(style.collections)}>
      <div className={cn(style.radioButtonsContainer)}>
        <RadioButtons />
      </div>
      <div className={cn(style.collectionCardsContainer)}>
        {fetchedCollectionPageInformation.map((item: any) => (
          <CollectionCard
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
