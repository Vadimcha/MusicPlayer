'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './MainBackground.module.scss';

export const MainBackground = () => {
  const videoList = [
    "/BackVideo4.mp4",
    "/BackVideo1.mp4",
    "/BackVideo2.mp4",
    "/BackVideo3.mp4",
  ]
  const [curVideo, setCurVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [])
  return (
    <div className={styles.backgroundWrapper}>
      <video
        className={styles.background}
        ref={videoRef}
        src={videoList[curVideo]}
        onEnded={() => setCurVideo((curVideo + 1) % videoList.length)}
        autoPlay
        muted
      />
    </div>
  );
};