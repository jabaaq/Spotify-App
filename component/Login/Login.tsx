"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import spotifyLogo from "../../public/Spotify_Logo_CMYK_Black.png";
import cn from "classnames";
import style from "./login.module.scss";
import { LOGIN_URL } from "@/lib/spotify";

export default function LoginComponent() {
  const handleClick = (): void => {
    window.location.href = LOGIN_URL;
  };

  return (
    <main className={cn(style.main)}>
      <div className={cn(style.login_container)}>
        <img src={spotifyLogo.src} alt="spotify" className={cn(style.logo)} />
        <Button onClick={handleClick} appearance={"login"}>
          Continue with Spotify
        </Button>
      </div>
    </main>
  );
}
