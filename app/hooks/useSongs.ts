'use client';
import axios from 'axios';
import { ISong } from '@/models/ISong';
import { useQuery } from '@tanstack/react-query';
import { json } from 'stream/consumers';

const api_url = process.env.NEXT_PUBLIC_API;

export const useSong = (id: string | number) => {
  return useQuery({
    queryKey: [`song-${id}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `${api_url}getSong/${id}`
      );
      console.log(`BREAKPOINT FROM HOOKS`, data)  
      return data as ISong;
    },
  });
};