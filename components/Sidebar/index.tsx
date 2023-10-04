import React from 'react'
import Link from 'next/link'
import { Home, Music, Mic2, Disc } from 'lucide-react'
import styles from './Sidebar.module.scss'
import { Line } from '@/components/Line';
import { YourCollection } from '@/components/Sidebar/YourCollection';

export const Sidebar = () => {
  const links = [
    {
      href: '/Home',
      title: 'Home',
      icon: <Home height={20} width={20}/>
    },
    {
      href: '/Songs',
      title: 'Songs',
      icon: <Music height={20} width={20}/>
    },
    {
      href: '/Artists',
      title: 'Artists',
      icon: <Mic2 height={20} width={20}/>
    },
    {
      href: '/Podcasts',
      title: 'Podcasts',
      icon: <Disc height={20} width={20}/>
    },
  ]
  return (
    <div className={styles.sidebar}>
      <ul className={styles.links}>
        { links.map((link) => {
          return <Link href={link.href} className={styles.link} key={link.href}>
            {link.icon}
            <li>{link.title}</li>
          </Link>
        }) }
      </ul>
      <Line color='9C9C9C' />
      <div className='collection'>
        <div className={styles.title_part}>
          <p className={styles.title}>Your Collection</p>
          <Link href='#' className={styles.seeAll}>see all</Link>
        </div>
        <YourCollection />
      </div>
    </div>
  );
};