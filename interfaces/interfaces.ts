export interface SpotifyState {
  token: string;
  loadHomePage: boolean;
  fetchedLikedSongs: string[];
  fetchedPlaylist: any;
  fetchedTopTracks: any;
  userInformation: any;
  fetchedTrackRecommendations: any;
  fetchedGenres: any;
  fetchedNewReleases: any;
  fetchedArtists: any;
  section: any;
  activePage: string | null;
  openSideMenu: boolean;
  selectedRadioButton: string;
  fetchedCollectionPageInformation: string[];
  thisMonthTopTracks: string[];
  selectedPlaylistId: string;
  fetchedPlaylistById: string[];
}
