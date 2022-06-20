/**
 * Interface for the 'Artists' data
 */
export interface ArtistsEntity {
  id: string | number; // Primary ID
  name: string;
  website: string;
  joindate: string;
  image: string;
  shorturl: string;
  shareurl: string;
}
