import SpotifyWebApi from "spotify-web-api-node";

const scopes: any = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
];
// .join(",");

// const params: any = {
//   scope: scopes,
// };

// const queryParamString: any = new URLSearchParams(params);

// const LOGIN_URL: string =
//   "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}?client_id=${
  process.env.NEXT_PUBLIC_CLIENT_ID
}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&scope=${scopes.join(
  " "
)}&response_type=token&show_dialog=true`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

console.log("spotifyApi ---", spotifyApi);

export default spotifyApi;

export { LOGIN_URL };
