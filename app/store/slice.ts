import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SpotifyState {
  token: string | null;
}

const initialState: SpotifyState = {
  token: sessionStorage.getItem("spotifyToken") || null,
};

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      sessionStorage.setItem("spotifyToken", action.payload);
    },
  },
});

export const { setToken } = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
