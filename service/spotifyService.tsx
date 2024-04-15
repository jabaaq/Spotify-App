import { Track } from "./serviceInterfaces";

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
  const _transferPlaylists = (playlist: any): any => {
    // return ()
  };

  return { _transferTracks, _transferPlaylists };
};

export default spotifyService;
