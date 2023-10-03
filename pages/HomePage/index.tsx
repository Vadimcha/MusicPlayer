import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import styles from './HomePage.module.scss'
import { TopPart } from '@/components/TopPart';
import { PopularArtists } from '@/components/PopularArtists';
import { RecentMusic } from '@/components/RecentMusic';
import { NowPlaying } from '@/components/NowPlaying';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <TopPart greetings />
        <div className={styles.mainContent}>
          <div className={styles.leftPart}>
            <PopularArtists />
            <RecentMusic />
          </div>
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};