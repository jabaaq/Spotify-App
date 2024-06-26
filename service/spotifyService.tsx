import {
  Track,
  Playlist,
  User,
  Recommendations,
  NewReleases,
  LikedSongs,
  PlaylistById,
  AlbumById,
  Artist,
  ArtistDetails,
  AlbumDetails,
} from "./serviceInterfaces";
import withoutImage from "../images/without_image.png";

export const millisToMinutes = (milliSeconds: number): string => {
  let minutes = Math.floor(milliSeconds / 60000);
  let seconds = ((milliSeconds % 60000) / 1000).toFixed(0);

  return minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
};
const spotifyService = () => {
  const _transferTracks = (track: any): Track => {
    return {
      title: track.name,
      id: track.id,
      key: track.id,
      image: track.album.images[0].url,
      artist:
        track.artists[0].name.length > 15
          ? track.artists[0].name.substring(0, 15) + "..."
          : track.artists[0].name,
      duration: millisToMinutes(track.duration_ms),
      preview_url: track.preview_url,
      spotify_url: track.external_urls.spotify,
    };
  };

  const _transferPlaylists = (playlist: any): Playlist => {
    return {
      name: playlist.name,
      image: playlist.images ? playlist.images[0].url : null,
      id: playlist.id,
      description: playlist.description
        ? playlist.description
        : "Without description",
      uri: playlist.uri,
      tracks: playlist.tracks,
      href: playlist.href,
      artist: playlist.artist,
      type: playlist.type,
      preview_url: playlist.preview_url,
      spotify_url: playlist.spotify_url,
    };
  };

  const _transferNewReleases = (release: any): NewReleases => {
    return {
      type: release.album_type,
      artist:
        release.artists[0].name.length >= 15
          ? release.artists[0].name.substring(0, 15) + "..."
          : release.artists[0].name,
      artist_id: release.artists[0].id,
      id: release.id,
      image: release.images[2].url,
      name:
        release.name.length >= 15
          ? release.name.substring(0, 15) + "..."
          : release.name,
      release_date: release.release_date,
      preview_url: release.preview_url,
    };
  };

  const _transferUser = (user: any): User => {
    return {
      name:
        user.display_name.length > 20
          ? user.display_name.substring(0, 20) + "..."
          : user.display_name,
      email: user.email,
      followers: user.followers.total,
      profile_url: user.external_urls.spotify,
      image: user.images[1] ? user.images[1].url : null,
      id: user.id,
    };
  };

  const _transferTrackRecommendations = (track: any): Recommendations => {
    return {
      artist:
        track.artists.length > 1
          ? track.artists[0].name
          : track.artists[0].name + ", ...",
      id: track.id,
      name:
        track.name.length >= 15
          ? track.name.substring(0, 15) + "..."
          : track.name,
      type: track.type,
      image: track.album.images[0].url,
      preview_url: track.preview_url,
      spotify_url: track.external_urls.spotify,
    };
  };

  const _transferLikedSongs = (song: any): LikedSongs => {
    return {
      artist: song.track.artists[0].name,
      href: song.track.href,
      id: song.track.id,
      name:
        song.track.name.length > 15
          ? song.track.name.substring(0, 15) + "..."
          : song.track.name,
      type: song.track.type,
      uri: song.track.uri,
      preview_url: song.track.preview_url,
      image: song.track.album.images[0].url,
      spotify_url: song.track.external_urls.spotify,
    };
  };

  const _transferAlbumById = (album: any): AlbumById => {
    return {
      href: album.href,
      id: album.id,
      name: album.name,
      label: album.label,
      popularity: album.popularity,
      total_tracks: album.total_tracks,
      image: album.images[1].url,
      tracks: album.tracks.items,
      type: "album",

      //Album information
      artist: album.artists[0].name,
      artist_url: album.artists[0].external_urls.spotify,
      release_date: album.release_date,
    };
  };

  const _transferPlaylistById = (playlist: any): PlaylistById => {
    return {
      href: playlist.href,
      id: playlist.id,
      description: playlist.description
        ? playlist.description
        : "Without description",
      name: playlist.name,
      total_tracks: playlist.tracks.items.length,
      image: playlist.images[0].url,
      tracks: playlist.tracks.items,
      type: "playlist",
      profile_url: playlist.profile_url,

      //Owner information
      playlist_owner_name: playlist.owner.display_name,
      playlist_owner_href: playlist.owner.external_urls.spotify,
      playlist_owner_followers: playlist.followers.total,
    };
  };

  const _transferArtists = (artist: any): ArtistDetails => {
    return {
      name: artist.name,
      type: artist.type,
      id: artist.id,
      image: artist.images.length !== 0 ? artist.images[0].url : null,
      spotifyAcc: artist.external_urls.spotify,
      followers: artist.followers.total,
    };
  };

  const _transferAlbums = (album: any): AlbumDetails => {
    return {
      id: album.id,
      name: album.name,
      release_date: album.release_date.substring(0, 4),
      image: album.images.length !== 0 ? album.images[0].url : null,
      artist: album.artists[0].name,
      type: album.album_type,
    };
  };

  const _transferArtistInfo = (artist: any) => {
    return {
      id: artist.id,
      followers: artist.followers.total,
      image: artist.images[0].url,
      name: artist.name,
    };
  };

  const _transferArtistAlbums = () => {};

  return {
    _transferTracks,
    _transferPlaylists,
    _transferUser,
    _transferNewReleases,
    _transferTrackRecommendations,
    _transferLikedSongs,
    _transferAlbumById,
    _transferPlaylistById,
    _transferArtists,
    _transferAlbums,
    _transferArtistInfo,
  };
};

export default spotifyService;
