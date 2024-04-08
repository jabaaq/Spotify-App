import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import style from "./spotify.module.scss";
import Navbar from "@/component/Navbar/Navbar";

const fonts = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description: "Spotify Clone App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={fonts.className}>
      <Navbar>Search</Navbar>
      {children}
    </div>
  );
}
