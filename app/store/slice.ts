import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { SpotifyState } from "@/interfaces/interfaces";
import cookie from "@boiseitguru/cookie-cutter";
import {
  fetchGenres,
  fetchArtists,
  fetchNewReleases,
  fetchTopTracks,
  fetchTrackRecommendations,
  fetchUserInformation,
  fetchUserPlaylist,
} from "./asyncThunks";

const initialState: SpotifyState = {
  token: "",
  fetchedPlaylist: [],
  userInformation: [],
  loadHomePage: false,
  fetchedTopTracks: [],
  fetchedTrackRecommendations: [],
  fetchedGenres: [],
  fetchedNewReleases: [],
  fetchedArtists: [],
  section: [],
  // activePage: "home",
  activePage: sessionStorage.getItem("ActivePage") || "home",
  openSideMenu: false,
};

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      cookie.set("token", action.payload);
      state.token = action.payload;
    },
    handlePageChange: (state, action) => {
      sessionStorage.setItem("ActivePage", action.payload);
      state.activePage = action.payload;
    },
    toggleSideMenu: (state, action): void => {
      action.payload
        ? (state.openSideMenu = action.payload)
        : (state.openSideMenu = !state.openSideMenu);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInformation.fulfilled, (state, action) => {
        state.userInformation = action.payload;
        state.loadHomePage = true;
      })
      //TRACKS
      .addCase(fetchTopTracks.fulfilled, (state, action) => {
        state.fetchedTopTracks = action.payload;
      })
      //TRACK RECOMMENDATIONS
      .addCase(fetchTrackRecommendations.fulfilled, (state, action) => {
        state.fetchedTrackRecommendations = ["Recommendations", action.payload];
      })
      //GENRES
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.fetchedGenres = action.payload;
      })
      //NEW RELEASES
      .addCase(fetchNewReleases.fulfilled, (state, action) => {
        state.fetchedNewReleases = ["New Releases", action.payload];
      })
      //ARTISTS
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.fetchedArtists = action.payload;
      })
      //Playlists
      .addCase(fetchUserPlaylist.fulfilled, (state, action) => {
        state.fetchedPlaylist = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchNewReleases.fulfilled,
          fetchTrackRecommendations.fulfilled
        ),
        (state) => {
          state.section = [
            state.fetchedNewReleases,
            state.fetchedTrackRecommendations,
          ];
        }
      )
      .addDefaultCase(() => {});
  },
});

export const { setToken, handlePageChange, toggleSideMenu } =
  spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
