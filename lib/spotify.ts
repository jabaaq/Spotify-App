import SpotifyWebApi from "spotify-web-api-node";

const scopes: any = [
  "user-read-email",
  "playlist-read-private",
  "user-library-read",
  "playlist-read-collaborative",
  "user-read-private",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
];

const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}?client_id=${
  process.env.NEXT_PUBLIC_CLIENT_ID
}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&scope=${scopes.join(
  " "
)}&response_type=token&show_dialog=true`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
