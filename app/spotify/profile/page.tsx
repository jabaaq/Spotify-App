import React from "react";
import cn from "classnames";
import style from "./profile.module.scss";
import UserInformation from "./UserInformation/UserInformation";
import ThisMonthTopTracks from "./UserInformation/ThisMonthTopTracks/ThisMonthTopTracks";

export default function profile() {
  return (
    <div className={cn(style.main)}>
      <UserInformation />
      <ThisMonthTopTracks />
    </div>
  );
}
