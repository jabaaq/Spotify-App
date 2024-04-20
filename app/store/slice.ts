import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import spotifyService from "@/service/spotifyService";

const { request } = useHttp();
const {
  _transferTracks,
  _transferPlaylists,
  _transferUser,
  _transferNewReleases,
  _transferTrackRecommendations,
} = spotifyService();
export interface SpotifyState {
  token: string | null;
  loadHomePage: boolean;
  fetchedPlaylist: any;
  fetchedTopTracks: any;
  userInformation: any;
  fetchedTrackRecommendations: any;
  fetchedGenres: any;
  fetchedNewReleases: any;
  fetchedArtists: any;
  section: any;
}

const initialState: SpotifyState = {
  token: sessionStorage.getItem("spotifyToken") || null,
  fetchedPlaylist: [],
  userInformation: [],
  loadHomePage: false,
  fetchedTopTracks: [],
  fetchedTrackRecommendations: [],
  fetchedGenres: [],
  fetchedNewReleases: [],
  fetchedArtists: [],
  section: [],
};

export const fetchPlaylist = createAsyncThunk(
  "fetch/fetchPlaylist",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken"); //it will always get the latest token value from sessionStorage
    const url: string = process.env.NEXT_PUBLIC_PLAYLIST!;
    const res = await request(url, token);
    return res.items.map(_transferPlaylists);
  }
);

export const fetchUserInformation = createAsyncThunk(
  "fetch/fetchUserInformation",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken");
    const url: string = process.env.NEXT_PUBLIC_USER!;
    const res = await request(url, token);
    return _transferUser(res);
  }
);

export const fetchTopTracks = createAsyncThunk(
  "fetch/fetchTopTracks",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken");
    const url: string = process.env.NEXT_PUBLIC_TOP_TRACKS!;
    const res = await request(url, token);
    return res.items.map(_transferTracks);
  }
);

export const fetchTrackRecommendations = createAsyncThunk(
  "fetch/fetchTrackRecommendations",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken");
    const url: string = process.env.NEXT_PUBLIC_TRACKS_RECOMMENDATIONS!;
    const res = await request(url, token);
    return res.tracks.map(_transferTrackRecommendations);
  }
);

export const fetchGenres = createAsyncThunk("fetch/fetchGenres", async () => {
  const token: string | null = sessionStorage.getItem("spotifyToken");
  const url: string = process.env.NEXT_PUBLIC_GENRES!;
  const res = await request(url, token);
  return res;
});

export const fetchArtists = createAsyncThunk("fetch/fetchArtists", async () => {
  const token: string | null = sessionStorage.getItem("spotifyToken");
  const url: string = process.env.NEXT_PUBLIC_SEVERAL_ARTISTS!;
  const res = await request(url, token);
  console.log(res);
  return res;
});

export const fetchNewReleases = createAsyncThunk(
  "fetch/fetchNewReleases",
  async () => {
    const token: string | null = sessionStorage.getItem("spotifyToken");
    const url: string = process.env.NEXT_PUBLIC_NEW_RELEASES!;
    const res = await request(url, token);
    return res.albums.items.map(_transferNewReleases);
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
      //TRACK RECOMMENDATIONS
      .addCase(fetchTrackRecommendations.fulfilled, (state, action) => {
        state.fetchedTrackRecommendations = ["Recommendations", action.payload];
        // console.log(state.fetchedTrackRecommendations);
      })
      //GENRES
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.fetchedGenres = action.payload;
      })
      //NEW RELEASES
      .addCase(fetchNewReleases.fulfilled, (state, action) => {
        state.fetchedNewReleases = ["New Releases", action.payload];
        // console.log(state.fetchedNewReleases);
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

export const { setToken } = spotifySlice.actions;
const { reducer } = spotifySlice;

export default reducer;
