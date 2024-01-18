import React from 'react';
import { Tracks } from '@/data/Tracks';
import { ISong } from '@/models/ISong';
import { Track } from '@/components/Track';
import styles from '../Sidebar.module.scss'
import { Artists } from '@/data/Artists';

export const YourCollection = () => {
  const tracks = Tracks;
  const artists = Artists;
  return (
    <div className={styles.myCollection}>
      { tracks.map((track: ISong, index) => {
          return <Track track={tracks[0]} artist={artists[0]} key={index} />
      }) }
    </div>
  );
};