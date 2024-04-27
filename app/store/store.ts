import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./slice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    spotifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
