import spotifyApi, { LOGIN_URL } from "@/lib/spotify";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { authOptions } from "./options";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
