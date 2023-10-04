import React from 'react'
import styles from './RecentMusic.module.scss'
import Link from 'next/link';
import { Tracks } from '@/data/Tracks';
import { ITrack } from '@/models/ITrack';
import { Track } from '@/components/Track';
import { Line } from '@/components/Line';

export const RecentMusic = () => {
  const tracks = Tracks;

  return (
    <div className={styles.block}>
      <div className={styles.titlePart}>
        <p className={styles.title}>Recently played</p>
        <Link href={'/recent-songs'}><p className={styles.seeAll}>see all</p></Link>
      </div>
      <div className={styles.tracks}>
        { tracks.map((track: ITrack, index) => {
          return <>
            <Track track={track} key={track.id} with_duration with_play />
            {index == tracks.length - 1 ? '' : <Line color={'9C9C9C'}/>}
          </>
        }) }
      </div>
    </div>
  );
};