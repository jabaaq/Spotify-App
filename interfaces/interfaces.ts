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
  activePage: string;
  openSideMenu: boolean;
  isLogged: boolean;
}
