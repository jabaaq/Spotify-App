import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import { RootState } from "./store";

const { request } = useHttp();

export interface SpotifyState {
  token: string | null;
  fetchedPlaylist: any;
  loadHomePage: boolean;
}

const initialState: SpotifyState = {
  token: sessionStorage.getItem("spotifyToken") || null,
  fetchedPlaylist: [],
  loadHomePage: false,
};

export const fetchPlaylist = createAsyncThunk(
  "fetch/fetchPlaylist",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken"); //it will always get the latest token value from sessionStorage
    console.log(token);
    const url: string = "https://api.spotify.com/v1/me/playlists";
    const res = await request(url, token);
    console.log(res);
    return res;
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
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.fetchedPlaylist = action.payload;
        state.loadHomePage = true;
      })
      .addCase(fetchPlaylist.pending, (state, action) => {
        state.loadHomePage = false;
        console.log("Pending");
      })
      .addCase(fetchPlaylist.rejected, (state, action) => {
        state.loadHomePage = false;
        console.log("Rejected");
      });
  },
});

export const { setToken } = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
