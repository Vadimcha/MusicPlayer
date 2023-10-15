import { IAlbum } from '@/models/IAlbum';
import { ISong } from '@/models/ISong';

export interface IArtist {
  id: number,
  name: string,
  artistCover: string,
  albums: IAlbum[],
  song: ISong[],
}