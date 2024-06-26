import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/component/Navbar/Navbar";
import AppNav from "@/component/AppNav/AppNav";
import MusicPlayer from "@/component/MusicPlayer/MusicPlayer";
import Footer from "@/component/Footer/Footer";

const fonts = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusicWave - Web Player: Music for everyone",
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
      <AppNav />
      {children}
      <MusicPlayer />
      <Footer />
    </div>
  );
}
