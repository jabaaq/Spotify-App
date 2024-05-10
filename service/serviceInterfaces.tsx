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
  image?: string;
  id?: string;
  description?: string;
  scrollTo?: any;
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
