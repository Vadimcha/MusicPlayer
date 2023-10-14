import { ISong } from '@/models/ISong';

export interface IAlbum {
  id: number,
  name: string,
  artist: string,
  songs: ISong[]
}