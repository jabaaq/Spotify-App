import {
  Track,
  Playlist,
  User,
  Recommendations,
  NewReleases,
} from "./serviceInterfaces";

const spotifyService = () => {
  const millisToMinutes = (milliSeconds: number): string => {
    let minutes = Math.floor(milliSeconds / 60000);
    let seconds = ((milliSeconds % 60000) / 1000).toFixed(0);

    return String(minutes + ":" + seconds);
  };

  const _transferTracks = (track: any): Track => {
    return {
      title:
        track.name.length > 15
          ? track.name.substring(0, 15) + "..."
          : track.name,
      id: track.id,
      key: track.id,
      image: track.album.images[0].url,
      artist:
        track.artists[0].name.length > 15
          ? track.artists[0].name.substring(0, 15) + "..."
          : track.artists[0].name,
      duration: millisToMinutes(track.duration_ms),
    };
  };

  const _transferPlaylists = (playlist: any): Playlist => {
    return {
      name: playlist.name,
      image: playlist.images[0].url,
      id: playlist.id,
      description: playlist.description
        ? playlist.description
        : "Without description",
      uri: playlist.uri,
      tracks: playlist.tracks,
      href: playlist.href,
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
    };
  };

  const _transferUser = (user: any): User => {
    return {
      name:
        user.display_name.length > 20
          ? user.display_name.substring(0, 20) + "..."
          : user.display_name,
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
    };
  };

  return {
    _transferTracks,
    _transferPlaylists,
    _transferUser,
    _transferNewReleases,
    _transferTrackRecommendations,
  };
};

export default spotifyService;
