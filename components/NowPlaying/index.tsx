import React from 'react'
import styles from './NowPlaying.module.scss'
import { Activity, Heart } from 'lucide-react';
import { Line } from '@/components/Line';

export const NowPlaying = () => {
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
    </div>
  );
};