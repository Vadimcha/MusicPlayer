import { IArtist } from '@/models/IArtist';
import { IAlbum } from '@/models/IAlbum';

export interface ISong {
  id: number,
  name: string,
  artist?: IArtist,
  album?: IAlbum,
  data?: string,
}