"use client";
import { useEffect } from "react";
import cn from "classnames";
import style from "./playlist.module.scss";
import testImage from "../../../../images/playlistTestImage.webp";

export default function playlist({ params }: { params: { id: string } }) {
  useEffect(() => {
    console.log(params.id);
  }, [params.id]);

  return (
    <div
      className={cn(style.playlist)}
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.416) 1%, rgba(0, 0, 0, 0.7)), url(${testImage.src})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={cn(style.playlist_container)}>
        <img
          src={testImage.src}
          alt="Playlist image"
          className={cn(style.playlist_image)}
        />
        <div className={cn(style.playlist_details)}>
          <h1 className={cn(style.playlist_title)}>Playlist Title</h1>
          <p className={cn(style.playlist_description)}>
            {params.id}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis nulla, nemo maxime culpa, aliquid asperiores ratione
          </p>
          <p>64 songs ~ 16 hrs+</p>
        </div>
      </div>
    </div>
  );
}
