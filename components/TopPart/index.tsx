import React from 'react'
import styles from './TopPart.module.scss'
import { Search } from 'lucide-react';
import { ubuntuMono } from '@/app/fonts';
import Avatar from '@/components/Avatar';

const username = 'Vadim'

export const TopPart = ({ greetings = false }: { greetings?: boolean }) => {
  return (
    <div className={styles.block}>
      { greetings ?
        <p className={styles.greetings}>Welcome back, {username}!</p> :
        '' }
      <div className={styles.search_field}>
        <Search height={16} width={16} className={styles.input_icon} />
        <form>
          <input className={`${styles.input} ${ubuntuMono.className}`} type='text' placeholder='Search by title, artist or album' />
        </form>
      </div>
      <Avatar />
    </div>
  );
};