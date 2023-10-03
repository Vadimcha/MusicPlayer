import React from 'react';
import './globals.css'
import './reset.css'
import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import styles from './Layout.module.scss'
import { TimeBlock } from '@/components/TimeBlock';
import { Player } from '@/components/Player';
import { Sidebar } from '@/components/Sidebar';


const ubuntuMono = Ubuntu_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Music Player',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntuMono.className} ${styles.main}`}>
        <TimeBlock />
        {children}
        <Player />
      </body>
    </html>
  )
}
