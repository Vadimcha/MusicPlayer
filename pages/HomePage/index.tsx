import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import styles from './HomePage.module.scss'
import { TopPart } from '@/components/TopPart';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <TopPart greetings />
      </div>
    </div>
  );
};