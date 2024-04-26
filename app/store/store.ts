import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./slice";
import { thunk } from "redux-thunk";
// import logger from "redux-logger";
// import logger from "redux-logger";
import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    spotifyReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
