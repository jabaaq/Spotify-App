import { createAsyncThunk } from "@reduxjs/toolkit";
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

const getToken = () => {
  return sessionStorage.getItem("spotifyToken");
};

export const fetchUserInformation = createAsyncThunk(
  "fetch/fetchUserInformation",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_USER!;
    const res = await request(url, token);
    return _transferUser(res);
  }
);

export const fetchTopTracks = createAsyncThunk(
  "fetch/fetchTopTracks",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_TOP_TRACKS!;
    const res = await request(url, token);
    return res.items.map(_transferTracks);
  }
);

export const fetchTrackRecommendations = createAsyncThunk(
  "fetch/fetchTrackRecommendations",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_TRACKS_RECOMMENDATIONS!;
    const res = await request(url, token);
    return res.tracks.map(_transferTrackRecommendations);
  }
);

export const fetchGenres = createAsyncThunk("fetch/fetchGenres", async () => {
  const token: string | null = getToken();
  const url: string = process.env.NEXT_PUBLIC_GENRES!;
  const res = await request(url, token);
  return res;
});

export const fetchArtists = createAsyncThunk("fetch/fetchArtists", async () => {
  const token: string | null = getToken();
  const url: string = process.env.NEXT_PUBLIC_SEVERAL_ARTISTS!;
  const res = await request(url, token);
  return res;
});

export const fetchNewReleases = createAsyncThunk(
  "fetch/fetchNewReleases",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_NEW_RELEASES!;
    const res = await request(url, token);
    return res.albums.items.map(_transferNewReleases);
  }
);
