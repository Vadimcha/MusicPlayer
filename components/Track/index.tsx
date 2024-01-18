'use client';
import React, { useEffect } from 'react';
import styles from './Track.module.scss'
import { Play } from 'lucide-react';
import Image from 'next/image';
import { IArtist } from '@/models/IArtist';
import { ISong } from '@/models/ISong';

interface TrackProps {
  track: ISong,
  artist: IArtist,
  with_duration?: boolean,
  with_play?: boolean,
}

export const Track = ({ track, artist, with_play = false }: TrackProps) => {
  useEffect(() => {
    console.log('BREACKPOINT FROM TRACK')
    console.log(track);
    console.log(artist);
  }, [])
  return (
    <div className={styles.track}>
      <div className={styles.main}>
        <Image
          src={track.songCover ?? ""}
          width={40}
          height={40}
          alt={"Track Image"}
        />
        <div className={styles.meta}>
          <p className={styles.title}>{ track.name }</p>
          <p className={styles.artist}>{ artist.name }</p>
        </div>
      </div>

      {/*{ with_duration ?*/}
      {/*  <p className={styles.duration}>{ `${Math.floor(track.duration / 60)}:${track.duration % 60}` }</p> :*/}
      {/*  '' }*/}
      { with_play ?
        <button className={styles.play}>
          <Play height={12} width={12} color={'#ffffff'} className={styles.play_icon} />
        </button> :
        '' }
    </div>
  );
};