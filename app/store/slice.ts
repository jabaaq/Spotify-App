import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import spotifyService from "@/service/spotifyService";
import { SpotifyState } from "@/interfaces/interfaces";
import {
  fetchGenres,
  fetchArtists,
  fetchNewReleases,
  fetchTopTracks,
  fetchTrackRecommendations,
  fetchUserInformation,
} from "./asyncThunks";

const initialState: SpotifyState = {
  // token: sessionStorage.getItem("spotifyToken") || null,
  token: "" || null,
  fetchedPlaylist: [],
  userInformation: [],
  loadHomePage: false,
  fetchedTopTracks: [],
  fetchedTrackRecommendations: [],
  fetchedGenres: [],
  fetchedNewReleases: [],
  fetchedArtists: [],
  section: [],
  activePage: "home",
  openSideMenu: false,
  isLogged: false,
};

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem("spotifyToken", action.payload);
      state.token = action.payload;
      console.log("token without sessionStorage", state.token);
      // state.isLogged = true;
    },
    handlePageChange: (state, action) => {
      state.activePage = action.payload;
    },
    toggleSideMenu: (state, action): void => {
      action.payload
        ? (state.openSideMenu = action.payload)
        : (state.openSideMenu = !state.openSideMenu);
    },
    setIsLogged: (state) => {
      state.isLogged = true;
    },
  },

  extraReducers: (builder) => {
    builder
      //PLAYLIST
      // .addCase(fetchPlaylist.fulfilled, (state, action) => {
      //   state.fetchedPlaylist = action.payload;
      //   state.loadHomePage = true;
      // })
      //USER INFORMATION
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

export const { setToken, handlePageChange, toggleSideMenu, setIsLogged } =
  spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
