import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.scss";
import { StoreProvider } from "./store/StoreProvider";

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
    <StoreProvider>
      <html lang="en">
        <body className={fonts.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
