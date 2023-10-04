import { IArtist } from '@/models/IArtist';

export interface ITrack {
  id: number,
  name: string,
  duration: number,
  artist: IArtist,
  cover: string,
  album?: string,
  audio?: string,
}