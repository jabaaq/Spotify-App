import { LOGIN_URL } from "@/lib/spotify";
import spotifyApi from "@/lib/spotify";
import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

async function refreshAccessToken(token: any) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    console.log("Refreshed token is", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: "RefreshAccessToken",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   async jwt({ token, account, user }: any) {
  //     //for the initial signing
  //     if (account && user) {
  //       return {
  //         ...token,
  //         accessToken: account.access_token,
  //         refreshToken: account.refresh_token,
  //         username: account.providerAccountId,
  //         accessTokenExpires: account.expires_at * 1000,
  //       };
  //     }

  //     // Return previous token if the access token has not expired yet
  //     if (Date.now() < token.accessTokenExpires) {
  //       console.log("EXISTING TOKEN IS VALID");
  //       return token;
  //     }

  //     // Access token has expired, try to update it
  //     console.log("ACCESS TOKEN IS EXPIRED ");
  //     return await refreshAccessToken(token);
  //   },

  //   async session({ session, token }: any) {
  //     session.user.accessToken = token.accessToken;
  //     session.user.refreshToken = token.refreshToken;
  //     session.user.username = token.username;

  //     return session;
  //   },
  // },
};
