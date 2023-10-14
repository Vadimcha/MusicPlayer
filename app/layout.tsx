import React from 'react';
import './globals.css'
import './reset.css'
import styles from './Layout.module.scss'
import { TimeBlock } from '@/components/TimeBlock';
import { Player } from '@/components/Player';
import { ubuntuMono } from '@/app/fonts';
import type { Metadata } from 'next'
import { MainBackground } from '@/components/MainBackground';

export const metadata: Metadata = {
  title: 'MyMusicPlayer',
  description: 'Just my music player',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="img/logo.svg" />
      </head>
      <body className={`${ubuntuMono.className} ${styles.main}`}>
        <MainBackground />
        <TimeBlock />
        {children}
        <Player />
      </body>
    </html>
  )
}
