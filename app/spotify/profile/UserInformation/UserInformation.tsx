"use client";
import cn from "classnames";
import style from "./UserInformation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useFetch } from "@/app/store/asyncThunks";
import { useEffect } from "react";
import withoutImg from "../../../../images/without_profile.jpg";
import Image from "next/image";

export default function UserInformation() {
  const dispatch = useDispatch<AppDispatch>();
  const { userInformation } = useSelector(
    (state: RootState) => state.spotifyReducer
  );
  const { fetchUserInformation } = useFetch();

  useEffect(() => {
    dispatch(fetchUserInformation());
  }, [dispatch, fetchUserInformation]);

  return (
    <div className={cn(style.user_information_container)}>
      <Image
        src={userInformation.image ? userInformation.image : withoutImg.src}
        className={cn(style.user_image)}
        alt={userInformation.name ? userInformation.name : "User profile"}
        width={200}
        height={200}
        loading="lazy"
        quality={100}
      />
      <div className={cn(style.user_details)}>
        <h1 className={cn(style.username)}>{userInformation.name}</h1>
        <p>{userInformation.followers} Followers</p>
      </div>
    </div>
  );
}
