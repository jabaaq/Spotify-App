"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import spotifyLogo from "../../public/Spotify_Logo_CMYK_Black.png";
import cn from "classnames";
import style from "./login.module.scss";
import { getProviders, signIn } from "next-auth/react";
import { LOGIN_URL } from "@/lib/spotify";

export default function LoginComponent() {
  // const [providers, setProviders] = useState<any>(null);
  // const providersPromise = getProviders();

  // useEffect(() => {
  //   providersPromise
  //     .then((provider) => {
  //       setProviders(provider?.spotify);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching providers: ", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log(LOGIN_URL);
  //   console.log(providers);
  // }, [providers]);

  const handleClick = (): void => {
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];

    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}?client_id=${
      process.env.NEXT_PUBLIC_CLIENT_ID
    }&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
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
    // <h1>Hello</h1>
  );
}
