import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { SpotifyState } from "@/interfaces/interfaces";
import cookie from "@boiseitguru/cookie-cutter";
import { useFetch } from "./asyncThunks";
// import {
//   fetchGenres,
//   fetchArtists,
//   fetchNewReleases,
//   fetchTopTracks,
//   fetchTrackRecommendations,
//   fetchUserInformation,
//   fetchUserPlaylist,
//   fetchLikedSongs,
//   fetchTopTracksThisMonth,
//   fetchUserPlaylistById,
//   fetchUserAlbumById,
//   fetchSearchItem,
//   fetchArtistInfo,
//   fetchArtistTopTracks,
//   fetchArtistAlbums,
// } from "./asyncThunks";

const initialState: SpotifyState = {
  token: "",
  fetchedPlaylist: [],
  fetchedLikedSongs: [],
  userInformation: [],
  loadHomePage: false,
  fetchedTopTracks: [],
  fetchedTrackRecommendations: [],
  fetchedGenres: [],
  fetchedNewReleases: [],
  fetchedArtists: [],
  section: [],
  activePage: sessionStorage.getItem("ActivePage") || "home",
  openSideMenu: false,
  selectedRadioButton: "collection",
  fetchedCollectionPageInformation: [],
  thisMonthTopTracks: [],
  selectedPlaylistId: "",
  fetchedPlaylistById: [],
  fetchedAlbumById: [],
  fetchSearchedItems: [],
  selectedTrack: [],
  openPlayer: false,
  currentSongId: "",
  fetchedArtistInfo: [],
  fetchedArtistTopTracks: [],
  fetchedArtistAlbums: [],
};
/* eslint-disable */
const {
  fetchGenres,
  fetchArtists,
  fetchNewReleases,
  fetchTopTracks,
  fetchTrackRecommendations,
  fetchUserInformation,
  fetchUserPlaylist,
  fetchLikedSongs,
  fetchTopTracksThisMonth,
  fetchUserPlaylistById,
  fetchUserAlbumById,
  fetchSearchItem,
  fetchArtistInfo,
  fetchArtistTopTracks,
  fetchArtistAlbums,
} = useFetch();

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
    handleSelectRadioButton: (state, action) => {
      state.selectedRadioButton = action.payload;
    },
    handleGetPlaylistId: (state, action) => {
      state.selectedPlaylistId = action.payload;
    },
    handleSelectTrack: (state, action) => {
      state.selectedTrack = action.payload;
      state.openPlayer = true;
    },
    handleClosePlayer: (state) => {
      state.openPlayer = false;
      state.selectedTrack = [];
    },
    handleSelectCurrentSongId: (state, action) => {
      state.currentSongId = action.payload;
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
        state.fetchedCollectionPageInformation = [];
        state.fetchedCollectionPageInformation = action.payload;
      })
      //Albums
      .addCase(fetchLikedSongs.fulfilled, (state, action) => {
        state.fetchedCollectionPageInformation = [];
        state.fetchedCollectionPageInformation = action.payload;
      })
      //This month top tracks
      .addCase(fetchTopTracksThisMonth.fulfilled, (state, action) => {
        state.thisMonthTopTracks = action.payload;
      })
      //Playlist by id
      .addCase(fetchUserPlaylistById.fulfilled, (state, action) => {
        state.fetchedPlaylistById = action.payload;
      })
      //Album by id
      .addCase(fetchUserAlbumById.fulfilled, (state, action) => {
        state.fetchedAlbumById = action.payload;
      })
      //Search items
      .addCase(fetchSearchItem.fulfilled, (state, action) => {
        state.fetchSearchedItems = action.payload;
      })
      //Artist information
      .addCase(fetchArtistInfo.fulfilled, (state, action) => {
        state.fetchedArtistInfo = action.payload;
      })
      //Artist Top Tracks
      .addCase(fetchArtistTopTracks.fulfilled, (state, action) => {
        state.fetchedArtistTopTracks = action.payload;
      })
      //Artist Albums
      .addCase(fetchArtistAlbums.fulfilled, (state, action) => {
        state.fetchedArtistAlbums = action.payload;
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

export const {
  setToken,
  handlePageChange,
  toggleSideMenu,
  handleSelectRadioButton,
  handleGetPlaylistId,
  handleSelectTrack,
  handleClosePlayer,
  handleSelectCurrentSongId,
} = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
