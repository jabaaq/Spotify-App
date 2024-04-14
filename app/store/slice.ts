import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import { RootState } from "./store";
import spotifyService from "@/service/spotifyService";

const { request } = useHttp();
const { _transferTracks } = spotifyService();
export interface SpotifyState {
  token: string | null;
  loadHomePage: boolean;
  fetchedPlaylist: any;
  fetchedTopTracks: any;
}

const initialState: SpotifyState = {
  token: sessionStorage.getItem("spotifyToken") || null,
  fetchedPlaylist: [],
  loadHomePage: false,
  fetchedTopTracks: [],
};

export const fetchPlaylist = createAsyncThunk(
  "fetch/fetchPlaylist",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken"); //it will always get the latest token value from sessionStorage
    const url: string = "https://api.spotify.com/v1/me/playlists";
    const res = await request(url, token);
    // console.log("PLAYLIST", res);
    return res;
  }
);

export const fetchTopTracks = createAsyncThunk(
  "fetch/fetchTopTracks",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken");
    const url: string =
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=3";
    // "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA";
    const res = await request(url, token);
    console.log(res);
    console.log("TOP TRACKS", res.items.map(_transferTracks));
    return res.items.map(_transferTracks);
  }
);

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem("spotifyToken", action.payload);
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //PLAYLIST
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.fetchedPlaylist = action.payload;
        state.loadHomePage = true;
      })
      .addCase(fetchPlaylist.pending, (state, action) => {
        state.loadHomePage = false;
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.loadHomePage = false;
      })
      //TRACKS
      .addCase(fetchTopTracks.fulfilled, (state, action) => {
        state.fetchedTopTracks = action.payload;
        console.log("Fulfilled");
      })
      .addCase(fetchTopTracks.pending, (state, action) => {
        console.log("Pending");
      })
      .addCase(fetchTopTracks.rejected, (state, action) => {
        console.log("Rejected");
      })
      .addDefaultCase(() => {});
  },
});

export const { setToken } = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
