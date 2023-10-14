'use client'
import React, { useEffect, useState } from 'react';
import { Tracks } from '@/data/Tracks'
import { Track } from '@/components/Track'
import styles from './Player.module.scss'
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react';
import { handleSoundTime } from '@/utils/handleSoundTime';

export const Player = ({ audioSource = "/CLOUDS.mp3" }: { audioSource?: string }) => {
  const track = Tracks[0];

  const [audio] = useState(new Audio(audioSource));
  const [isPlaying, setIsPlaying] = useState(false);

  const [curTime, setCurTime] = useState(audio.currentTime);
  const [duration, setDuration] = useState(0);
  const [percent, setPercent] = useState<number>(0);

  const [volumePercent, setVolumePercent] = useState<number>(0.05);

  const togglePlay = () => {
    if (isPlaying) {
      console.log(`BREAKPOINT PAUSE`)
      setIsPlaying(false);
      audio.pause();
    } else {
      console.log(`BREAKPOINT PLAY`)
      setIsPlaying(true);
      audio.play();
    }
  };

  useEffect(() => {
    const songBar = document.getElementById('progressBar');
    if (songBar) {
      songBar.addEventListener('mousedown', function(e) {
        const xPosition = e.clientX - this.getBoundingClientRect().left;
        let pct = Math.floor((xPosition / songBar.offsetWidth) * 100);
        if(pct < 0) pct = 0;
        if(pct > 100) pct = 100;
        console.log(`BREAKPOINT SONG ${pct}%`)
        audio.currentTime = audio.duration * pct / 100;
        setPercent(pct);
      }, false);
    }
    const volumeBar = document.getElementById('progressVolumeBar');
    if (volumeBar) {
      volumeBar.addEventListener('mousedown', function(e) {
        const xPosition = e.clientX - this.getBoundingClientRect().left;
        let pct = Math.floor((xPosition / volumeBar.offsetWidth) * 100);
        if(pct < 0) pct = 0;
        if(pct > 100) pct = 100;
        console.log(`BREAKPOINT VOLUME ${pct}%`)
        audio.volume = pct / 100;
        setVolumePercent(pct / 100);
      }, false);
    }

    // document.addEventListener('keydown', function(event) { // TODO
    //   if (event.key === ' ' || event.code === 'Space') {
    //     togglePlay();
    //   }
    // });
  }, [])

  useEffect(() => {
    audio.addEventListener('durationchange', () => {
      setDuration(audio.duration);
      setPercent(audio.currentTime * 100 / audio.duration)
    })
    audio.addEventListener('timeupdate', () => {
      setCurTime(audio.currentTime);
      setPercent(audio.currentTime * 100 / audio.duration)
    })
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  }, [audio]);

  return (
    <div>
      <div className={styles.player}>
        <div className={styles.meta}>
          <Track track={track}/>
        </div>
        <div className={styles.funcPart}>
          <div className={styles.topPart}>
            <Shuffle width={20} height={20} className={styles.btn} />
            <SkipBack width={20} height={20} className={styles.btn} />
            { isPlaying ?
              <Pause width={30} height={30} className={styles.btn} onClick={togglePlay} /> :
              <Play width={30} height={30} className={styles.btn} onClick={togglePlay} />}
            <SkipForward width={20} height={20} className={styles.btn} />
            <Repeat width={20} height={20} className={styles.btn} />
          </div>
          <div className={styles.progressWrapper}>
            <p className={styles.time}>{handleSoundTime(curTime)}</p>
            <div className={styles.progressBar} id='progressBar'>
              <div className={styles.line1} style={{ width: `${percent}%` }} />
              <div className={styles.line2} style={{ width: `${100 - percent}%` }} />
            </div>
            <p className={styles.time}>{handleSoundTime(duration)}</p>
          </div>
        </div>
        <div className={styles.volume}>
          <Volume1 width={25} height={25} />
            <div className={styles.progressVolumeBar} id='progressVolumeBar'>
              <div className={styles.volumeLine1} style={{ width: `${volumePercent * 100}%` }} />
              <div className={styles.volumeLine2} style={{ width: `${100 - volumePercent * 100}%` }} />
            </div>
        </div>
      </div>
    </div>
  );
};