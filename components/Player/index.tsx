'use client'
import React, { useEffect, useState } from 'react';
import { Tracks } from '@/data/Tracks'
import { Track } from '@/components/Track'
import styles from './Player.module.scss'
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react';
import { handleSoundTime } from '@/utils/handleSoundTime';

export const Player = ({ audioSource = "/CLOUDS.mp3" }: { audioSource: string }) => {
  const track = Tracks[0];

  const [audio] = useState(new Audio(audioSource));
  const [isPlaying, setIsPlaying] = useState(false);

  const [curTime, setCurTime] = useState(audio.currentTime);
  const [duration, setDuration] = useState(0);
  const[percent, setPercent] = useState<number>(0);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const outside = document.getElementById('progressBar');
    if (outside) {
      outside.addEventListener('click', function(e) {
        const xPosition = e.clientX - this.getBoundingClientRect().left;
        const pct = Math.floor((xPosition / outside.offsetWidth) * 100);
        console.log(`BREAKPOINT ${pct}`)
        audio.currentTime = audio.duration * pct / 100;
        setPercent(pct);
      }, false);
    }
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
        </div>
      </div>
    </div>
  );
};