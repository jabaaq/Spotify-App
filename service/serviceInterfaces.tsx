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
}

export interface User {
  name: string;
}
