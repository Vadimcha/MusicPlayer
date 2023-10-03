import React from 'react'
import styles from './PopularArtists.module.scss'
import Link from 'next/link';
import { Artist } from '@/components/PopularArtists/Artist';

export const PopularArtists = () => {
  return (
    <div className={styles.block}>
      <div className={styles.titlePart}>
        <p className={styles.title}>Popular Artists</p>
        <Link href={'/popular-artists'}><p className={styles.seeAll}>see all</p></Link>
      </div>
      <div className={styles.Artists}>
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </div>
    </div>
  );
};