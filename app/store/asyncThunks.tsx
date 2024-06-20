import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "@/services/http.hook";
import spotifyService from "@/service/spotifyService";
import cookie from "@boiseitguru/cookie-cutter";

const { request } = useHttp();

const {
  _transferTracks,
  _transferPlaylists,
  _transferUser,
  _transferNewReleases,
  _transferTrackRecommendations,
  _transferLikedSongs,
  _transferAlbumById,
  _transferPlaylistById,
  _transferArtistInfo,
  _transferAlbums,
} = spotifyService();

const getToken = () => {
  return cookie.get("token")!;
};

//Fetch items
export const fetchSearchItem = createAsyncThunk(
  "fetch/fetchSearchedItems",
  async (item: string) => {
    const token: string | null = getToken();
    const url: string =
      process.env.NEXT_PUBLIC_SEARCH_ITEM! +
      item +
      process.env.NEXT_PUBLIC_SEARCHED_ITEMS_TYPE;
    const res = item && (await request(url, token));
    return res;
  }
);

//User playlists
export const fetchUserPlaylist = createAsyncThunk(
  "fetch/fetchUserPlaylist",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_PLAYLIST!;
    const res = await request(url, token);
    return res.items.map(_transferPlaylists);
  }
);

//Playlist by id
export const fetchUserPlaylistById = createAsyncThunk(
  "fetch/fetchUserPlaylistById",
  async (id: string) => {
    const token: string | null = getToken();
    const url: string = `${process.env.NEXT_PUBLIC_PLAYLIST_BY_ID! + id}`;
    const res = await request(url, token);
    return _transferPlaylistById(res);
  }
);

//Fetch Album by id
export const fetchUserAlbumById = createAsyncThunk(
  "fetch/fetchUserAlbumById",
  async (id: string) => {
    const token: string | null = getToken();
    const url: string = `${process.env.NEXT_PUBLIC_ALBUM_BY_ID! + id}`;
    const res = await request(url, token);
    return _transferAlbumById(res);
  }
);

//Fetch artist information
export const fetchArtistInfo = createAsyncThunk(
  "fetch/fetchArtistInfo",
  async (id: string) => {
    const token: string | null = getToken();
    const url: string = `${process.env.NEXT_PUBLIC_ARTIST_INFO! + id}`;
    const res = await request(url, token);
    return _transferArtistInfo(res);
  }
);

//Fetch artist top tracks
export const fetchArtistTopTracks = createAsyncThunk(
  "fetch/fetchArtistTopTracks ",
  async (id: string) => {
    const token: string | null = getToken();
    const url: string = `${
      process.env.NEXT_PUBLIC_ARTIST_TOP_TRACKS! + id
    }/top-tracks`;
    const res = await request(url, token);
    return res;
  }
);

//Fetch artist albums
export const fetchArtistAlbums = createAsyncThunk(
  "fetch/fetchArtistAlbums ",
  async (id: string) => {
    const token: string | null = getToken();
    const url: string = `${
      process.env.NEXT_PUBLIC_ARTIST_ALBUMS! + id
    }/albums `;
    const res = await request(url, token);
    return res.items.map(_transferAlbums);
  }
);

export const fetchLikedSongs = createAsyncThunk(
  "fetch/fetchLikedSongs",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_LIKED_SONGS!;
    const res = await request(url, token);

    return res.items.map(_transferLikedSongs);
  }
);

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
export const fetchTopTracksThisMonth = createAsyncThunk(
  "fetch/fetchTopTracksThisMonth",
  async () => {
    const token: string | null = getToken();
    const url: string = process.env.NEXT_PUBLIC_TOP_TRACKS_THIS_MONTH!;
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
