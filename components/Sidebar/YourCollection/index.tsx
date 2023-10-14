import React from 'react';
import { Tracks } from '@/data/Tracks';
import { ISong } from '@/models/ISong';
import { Track } from '@/components/Track';
import styles from '../Sidebar.module.scss'

export const YourCollection = () => {
  const tracks = Tracks;
  return (
    <div className={styles.myCollection}>
      { tracks.map((track: ISong) => {
          return <Track track={track} key={track.id} />
      }) }
    </div>
  );
};