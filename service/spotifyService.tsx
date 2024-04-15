import { Track, Playlist, User } from "./serviceInterfaces";

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
    };
  };

  const _transferUser = (user: any): User => {
    return {
      name: user.display_name,
    };
  };

  return { _transferTracks, _transferPlaylists, _transferUser };
};

export default spotifyService;
