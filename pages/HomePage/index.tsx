import React from 'react'
import { Sidebar } from '@/components/Sidebar'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className={styles.main}>
      <Sidebar />
    </div>
  );
};