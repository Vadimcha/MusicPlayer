'use client'
import React, { useEffect, useState } from 'react';
import styles from './TimeBlock.module.scss'
import { getTime } from '@/utils/getTime';

export const TimeBlock = () => {
  const [time, setTime] = useState<string>('--:--');
  useEffect(() => {
    const fetchCurrentTime = async () => {
      setTime(await getTime());
    };
    const intervalId = setInterval(fetchCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.main}>
      {time}
    </div>
  );
};