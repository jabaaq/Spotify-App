export interface Track {
  title: string;
  id: string;
  key: string;
  image: string;
  artist: string;
  duration: string;
  position?: number;
  preview_url: string;
  spotify_url?: string;
}

export interface Playlist {
  name?: string;
  image?: any;
  id?: string;
  description?: string;
  uri?: string;
  tracks?: string;
  href?: string;
  scrollTo?: any;
  artist?: string;
  type?: string;
  preview_url?: string;
  spotify_url: string;
}

export interface User {
  name: string;
  email: string;
  followers: number;
  profile_url: string;
  image: string;
  id: string;
}

export interface Recommendations {
  artist: string;
  id: string;
  name: string;
  type: string;
  image: string;
  preview_url?: string;
  spotify_url?: string;
}
export interface NewReleases {
  type?: string;
  artist: string;
  artist_id?: string;
  id?: string;
  image: string;
  name: string;
  release_date?: string;
  preview_url?: string;
  spotify_url?: string;
}

export interface LikedSongs {
  artist: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  preview_url: string;
  image: string;
  spotify_url: string;
}

export interface AlbumById {
  id: string;
  name: string;
  href: string;
  label: string;
  popularity: string;
  release_date: string;
  total_tracks: string;
  image: string;
  tracks: string;
  type: string;
  artist: string;
  artist_url: string;
}
export interface PlaylistById {
  id: string;
  name: string;
  href: string;
  description?: string;
  release_date?: string;
  total_tracks: string;
  image: string;
  tracks: string;
  type: string;
  profile_url?: string;
  playlist_owner_name: string;
  playlist_owner_href: string;
  playlist_owner_followers: number;
}

export interface ArtistDetails {
  name: string;
  type: string;
  id: string;
  image: string;
  spotifyAcc?: string;
  followers?: number;
}

export interface Artist {
  artist: ArtistDetails;
}

export interface AlbumDetails {
  id: string;
  name: string;
  release_date: string;
  image: string;
  artist: string;
}
