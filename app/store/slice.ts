import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { reducerCases } from "./Constants";
import { stat } from "fs/promises";

export interface SpotifyState {
  value: number;
  token: any;
}

const initialState: SpotifyState = {
  value: 0,
  token: null,
};

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reducerCases: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, reducerCases } =
  spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
