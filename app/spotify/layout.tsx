import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import style from "./spotify.module.scss";

const fonts = Open_Sans({ subsets: ["latin"] });

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
      <h1>Navbar</h1>
      {children}
    </div>
  );
}
