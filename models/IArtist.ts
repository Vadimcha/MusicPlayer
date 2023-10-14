import { IAlbum } from '@/models/IAlbum';

export interface IArtist {
  id: number,
  name: string,
  albums: IAlbum[]
}