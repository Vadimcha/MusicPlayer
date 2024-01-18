'use client';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IArtist } from '@/models/IArtist';

const api_url = process.env.NEXT_PUBLIC_API;

export const useArtist = (id: string | number | undefined) => {
  return useQuery({
    queryKey: [`artist-${id}`],
    queryFn: async () => {
      if(!id) return null;
      const { data } = await axios.get(
        `${api_url}getArtist/${id}`
      );
      console.log(`BREAKPOINT FROM HOOKS`, data)
      return data as IArtist;
    },
  });
};