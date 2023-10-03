import React from 'react'
import styles from './PopularArtists.module.scss'

export const Artist = () => {
  return (
    <div className={styles.artist}>
      <div className={styles.artistImg}></div>
      <div className={styles.artistName}>Weekend</div>
    </div>
  );
};