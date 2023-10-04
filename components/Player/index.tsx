import React from 'react';
import { Tracks } from '@/data/Tracks';
import { Track } from '@/components/Track';
import styles from './Player.module.scss'
import { PauseCircle, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react';

export const Player = () => {
  const track = Tracks[0];
  return (
    <div className={styles.player}>
      <div className={styles.meta}>
        <Track track={track}/>
      </div>
      <div className={styles.funcPart}>
        <div className={styles.topPart}>
          <Shuffle width={20} height={20} className={styles.btn} />
          <SkipBack width={20} height={20} className={styles.btn} />
          <PauseCircle width={40} height={40} className={styles.btn} />
          <SkipForward width={20} height={20} className={styles.btn} />
          <Repeat width={20} height={20} className={styles.btn} />
        </div>
      </div>
      <div className={styles.volume}>
        <Volume1 width={25} height={25} />
      </div>
    </div>
  );
};