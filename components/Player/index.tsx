'use client';
import React, { useEffect, useState } from 'react';
import { Track } from '@/components/Track'
import styles from './Player.module.scss'
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react';
import { handleSoundTime } from '@/utils/handleSoundTime';
import { useSong } from '@/hooks/useSongs';
import { useArtist } from '@/hooks/useArtist';

export const Player = () => {
  const { data: curSong, isSuccess } = useSong("2");
  const { data: artist } = useArtist(curSong?.artist);

  useEffect(() => {
    console.log('BREAKPOINT FROM PLAYER', curSong);
  }, [curSong])
  useEffect(() => {
    console.log('BREAKPOINT FROM PLAYER', artist);
  }, [artist])

  const [isPlaying, setIsPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [percent, setPercent] = useState<number>(0);
  const [volumePercent, setVolumePercent] = useState<number>(0.5);

  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();

  const togglePlay = () => {
    if(audio) {
      console.log(`IS PLAYING ${isPlaying}`)
      if (isPlaying) {
        console.log(`BREAKPOINT PAUSE`)
        setIsPlaying(false);
        audio.pause();
      } else {
        console.log(`BREAKPOINT PLAY`)
        setIsPlaying(true);
        audio.play();
      }
    }
  };
  useEffect(() => {
    if(isSuccess) {
      const aud = new Audio(curSong?.data);
      aud.volume = volumePercent;
      setAudio(aud);
    }
  }, [isSuccess]);

  const ProgressChangeHandler = (e: MouseEvent, elem: HTMLElement) => {
    const xPosition = e.clientX - elem.getBoundingClientRect().left;
    let pct = Math.floor((xPosition / elem.offsetWidth) * 100);
    if (pct < 0) pct = 0;
    if (pct > 100) pct = 100;
    return pct;
  }

  useEffect(() => {
    if(audio) {
      const songBar = document.getElementById('progressBar');
      if (songBar) {
        songBar.addEventListener('mousedown', function(e) {
          if(audio) {
            const pct = ProgressChangeHandler(e, songBar);
            audio.currentTime = audio.duration * pct / 100;
            setPercent(pct);
          }
        }, false);
      }

      const volumeBar = document.getElementById('progressVolumeBar');
      if (volumeBar) {
        volumeBar.addEventListener('mousedown', function(e) {
          if(audio) {
            const pct = ProgressChangeHandler(e, volumeBar);
            audio.volume = pct / 100;
            setVolumePercent(pct / 100);
          }
        }, false);
      }
    }
  }, [audio])

  const handler = (event: KeyboardEvent) => {
    if (event.key === ' ' || event.code === 'Space' || event.keyCode == 32) {
      console.log(`BREAKPOINT SPACE`)
      togglePlay();
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [audio, isPlaying])

  useEffect(() => {
    if(audio) {
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
    }
  }, [audio]);

  return (
    <div>
      <div className={styles.player}>
        <div className={styles.meta}>
          {
            (artist && curSong) ? <Track track={curSong} artist={artist}/> :
            <p>Loading...</p>
          }
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