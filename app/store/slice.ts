import { AsyncThunkAction, createSlice } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import { RootState } from "./store";

const { request } = useHttp();

export interface SpotifyState {
  token: string | null;
  fetchedPlaylist: any;
}

const initialState: SpotifyState = {
  token: sessionStorage.getItem("spotifyToken") || null,
  fetchedPlaylist: [],
};

// export const fetchPlaylist = createAsyncThunk(
//   "fetch/fetchPlaylist",
//   async () => {
//     const url: string = "https://api.spotify.com/v1/me/playlists";
//     const res = await request(url);
//     console.log(res);
//     return res;
//   }
// );

export const fetchPlaylist = createAsyncThunk(
  "fetch/fetchPlaylist",
  async () => {
    const { token } = initialState;
    const url: string = "https://api.spotify.com/v1/me/playlists";
    const res = await request(url, "GET", null, {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    });
    console.log(res);
    return res;
  }
);

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      sessionStorage.setItem("spotifyToken", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylist.fulfilled, (state, action) => {
        state.fetchedPlaylist = action.payload;
      })
      .addCase(fetchPlaylist.pending, () => {
        console.log("Pending");
      })
      .addCase(fetchPlaylist.rejected, () => {
        console.log("Rejected");
      });
  },
});

export const { setToken } = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
