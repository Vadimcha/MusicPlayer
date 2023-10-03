import React from 'react'
import styles from './RecentMusic.module.scss'
import Link from 'next/link';

export const RecentMusic = () => {
  return (
    <div className={styles.block}>
      <div className={styles.titlePart}>
        <p className={styles.title}>Recently played</p>
        <Link href={'/recent-songs'}><p className={styles.seeAll}>see all</p></Link>
      </div>
    </div>
  );
};