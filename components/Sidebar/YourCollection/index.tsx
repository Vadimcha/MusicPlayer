import React from 'react';
import { Tracks } from '@/data/Tracks';
import { ITrack } from '@/models/ITrack';
import { Track } from '@/components/Track';
import styles from '../Sidebar.module.scss'

export const YourCollection = () => {
  const tracks = Tracks;
  return (
    <div className={styles.myCollection}>
      { tracks.map((track: ITrack) => {
          return <Track track={track} key={track.id} />
      }) }
    </div>
  );
};