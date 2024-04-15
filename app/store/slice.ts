import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import { RootState } from "./store";
import spotifyService from "@/service/spotifyService";

const { request } = useHttp();
const { _transferTracks, _transferPlaylists, _transferUser } = spotifyService();
export interface SpotifyState {
  token: string | null;
  loadHomePage: boolean;
  fetchedPlaylist: any;
  fetchedTopTracks: any;
  userInformation: any;
}

const initialState: SpotifyState = {
  token: sessionStorage.getItem("spotifyToken") || null,
  fetchedPlaylist: [],
  userInformation: [],
  loadHomePage: false,
  fetchedTopTracks: [],
};

export const fetchPlaylist = createAsyncThunk(
  "fetch/fetchPlaylist",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken"); //it will always get the latest token value from sessionStorage
    const url: string = "https://api.spotify.com/v1/me/playlists";
    // const url: string = "https://api.spotify.com/v1/browse/featured-playlists";
    const res = await request(url, token);
    // console.log("PLAYLIST", res);
    // console.log("PLAYLIST", res.items.map(_transferPlaylists));
    return res.items.map(_transferPlaylists);
  }
);
export const fetchUserInformation = createAsyncThunk(
  "fetch/fetchUserInformation",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken"); //it will always get the latest token value from sessionStorage
    const url: string = "https://api.spotify.com/v1/me";
    const res = await request(url, token);
    // console.log("User", res);
    console.log("User", _transferUser(res));
    return _transferUser(res);
  }
);

export const fetchTopTracks = createAsyncThunk(
  "fetch/fetchTopTracks",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken");
    const url: string =
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=3";
    const res = await request(url, token);
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
      //USER INFORMATION
      .addCase(fetchUserInformation.fulfilled, (state, action) => {
        state.userInformation = action.payload;
        state.loadHomePage = true;
      })
      .addCase(fetchUserInformation.pending, (state, action) => {
        state.loadHomePage = false;
      })
      .addCase(fetchUserInformation.rejected, (state, action) => {
        state.loadHomePage = false;
      })
      //TRACKS
      .addCase(fetchTopTracks.fulfilled, (state, action) => {
        state.fetchedTopTracks = action.payload;
      })
      .addCase(fetchTopTracks.pending, (state, action) => {
        state.loadHomePage = false;
      })
      .addCase(fetchTopTracks.rejected, (state, action) => {
        state.loadHomePage = false;
      })
      .addDefaultCase(() => {});
  },
});

export const { setToken } = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
