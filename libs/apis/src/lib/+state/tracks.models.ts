/**
 * Interface for the 'Tracks' data
 */
export interface TracksEntity {
  id: string | number; // Primary ID
  name: string;
  duration: number;
  artist_id: string | number;
  artist_name: string;
  artist_idstr: string;
  album_name: string;
  album_id: number;
  position: number;
  releasedate: string;
  album_image: string;
  audio: string;
  image: string;
}
