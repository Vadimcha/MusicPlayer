import React from 'react'
import styles from './NowPlaying.module.scss'
import { Activity, Heart } from 'lucide-react';
import { Line } from '@/components/Line';
import { Tracks } from '@/data/Tracks';
import { ITrack } from '@/models/ITrack';
import { Track } from '@/components/Track';

export const NowPlaying = () => {
  const tracks = Tracks;
  return (
    <div className={styles.block}>
      <div className={styles.titlePart}>
        <Activity height={22} width={22} />
        <p className={styles.title}>Now Playing</p>
      </div>
      <div className={styles.songImg}></div>
      <div className={styles.bottomPart}>
        <div className={styles.songDscr}>
          <p className={styles.songDscr_title}>Cry</p>
          <p className={styles.songDscr_artist}>Cigarettes after sex</p>
        </div>
        <Heart height={20} width={20} />
      </div>
      <Line color='ADADAD'/>
      <div className={styles.queue}>
        <p className={styles.queue_title}>Queue</p>
        <div className={styles.queue_tracks}>
          { tracks.map((track: ITrack) => {
            return <Track track={track} key={track.id} with_play  />;
          }) }
        </div>
      </div>
    </div>
  );
};