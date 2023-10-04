import React from 'react'
import styles from './Track.module.scss'
import { Play } from 'lucide-react';
import { ITrack } from '@/models/ITrack';

interface TrackProps {
  track: ITrack,
  with_duration?: boolean,
  with_play?: boolean,
}

export const Track = ({ track, with_duration = false, with_play = false }: TrackProps) => {
  return (
    <div className={styles.track}>
      <div className={styles.main}>
        <div className={styles.cover} style={{ background: `#ffffff url(${track.cover}) center center/cover no-repeat` }}></div>
        <div className={styles.meta}>
          <p className={styles.title}>{ track.name }</p>
          <p className={styles.artist}>{ track.artist.name }</p>
        </div>
      </div>
      { with_duration ?
        <p className={styles.duration}>{ `${Math.floor(track.duration / 60)}:${track.duration % 60}` }</p> :
        '' }
      { with_play ?
        <button className={styles.play}>
          <Play height={12} width={12} color={'#ffffff'} className={styles.play_icon} />
        </button> :
        '' }
    </div>
  );
};