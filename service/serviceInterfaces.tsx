export interface Track {
  title: string;
  id: string;
  key: string;
  image: string;
  artist: string;
  duration: string;
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
}

export interface User {
  name: string;
}

export interface Recommendations {
  artist: string;
  id: string;
  name: string;
  type: string;
  image: string;
}
export interface NewReleases {
  type?: string;
  artist: string;
  artist_id?: string;
  id?: string;
  image: string;
  name: string;
  release_date?: string;
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
}
