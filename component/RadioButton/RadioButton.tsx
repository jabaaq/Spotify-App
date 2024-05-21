import { RadioButtonsProps } from "./RadioButton.props";
import "./RadioButton.scss";
import { useEffect, useState } from "react";
import { handleSelectRadioButton } from "@/app/store/slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";

const RadioButtons = ({}: RadioButtonsProps): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedRadioButton } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  return (
    <>
      <input
        type="radio"
        id="lang-1"
        name="lang"
        value="collection"
        className="radio"
        checked={selectedRadioButton === "collection"}
        onChange={() => dispatch(handleSelectRadioButton("collection"))}
      />
      <label className="label label-1" htmlFor="lang-1">
        My Collection
      </label>

      <input
        type="radio"
        id="lang-2"
        name="lang"
        value="likes"
        className="radio"
        checked={selectedRadioButton === "likes"}
        onChange={() => dispatch(handleSelectRadioButton("likes"))}
      />
      <label className="label label-2" id="lang-2" htmlFor="lang-2">
        Likes
      </label>
    </>
  );
};

export default RadioButtons;
