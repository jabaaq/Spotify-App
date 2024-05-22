"use client";
import cn from "classnames";
import style from "./UserInformation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchUserInformation } from "@/app/store/asyncThunks";
import { useEffect } from "react";
import testImg from "../../../../images/without_image.png";

export default function UserInformation() {
  const dispatch = useDispatch<AppDispatch>();
  const { userInformation } = useSelector(
    (state: RootState) => state.spotifyReducer
  );

  useEffect(() => {
    dispatch(fetchUserInformation());
  }, []);

  useEffect(() => {
    console.log(userInformation);
  }, [userInformation]);

  return (
    <div className={cn(style.user_information_container)}>
      <img src={testImg.src} className={cn(style.user_image)} alt="Test" />
      <div className={cn(style.user_details)}>
        <h1 className={cn(style.username)}>Jaba Kadagishvili</h1>
        <p>0 Followers</p>
      </div>
    </div>
  );
}
