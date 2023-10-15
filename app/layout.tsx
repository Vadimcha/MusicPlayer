'use client';
import React from 'react';
import './globals.css'
import './reset.css'
import styles from './Layout.module.scss'
import { TimeBlock } from '@/components/TimeBlock';
import { Player } from '@/components/Player';
import { ubuntuMono } from '@/app/fonts';
import { MainBackground } from '@/components/MainBackground';
import Head from 'next/head';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <title>MyMusicPlayer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <body className={`${ubuntuMono.className} ${styles.main}`}>
          <MainBackground />
          <TimeBlock />
          {children}
          <Player />
        </body>
      </QueryClientProvider>
    </html>
  )
}
