import React from 'react'
import styles from './RecentMusic.module.scss'
import Link from 'next/link';
import { Tracks } from '@/data/Tracks';
import { ISong } from '@/models/ISong';
import { Track } from '@/components/Track';
import { Line } from '@/components/Line';
import { Artists } from '@/data/Artists';

export const RecentMusic = () => {
  const tracks = Tracks;
  const artists = Artists;
  return (
    <div className={styles.block}>
      <div className={styles.titlePart}>
        <p className={styles.title}>Recently played</p>
        <Link href={'/recent-songs'}><p className={styles.seeAll}>see all</p></Link>
      </div>
      <div className={styles.tracks}>
        { tracks.map((track: ISong, index) => {
          return <>
            <Track track={tracks[0]} artist={artists[0]} key={index} with_duration with_play />
            {index == tracks.length - 1 ? '' : <Line color={'9C9C9C'}/>}
          </>
        }) }
      </div>
    </div>
  );
};