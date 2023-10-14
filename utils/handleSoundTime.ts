export function handleSoundTime(time: number) {
  const minutes = String(Math.floor(time / 60));
  let seconds = String(Math.floor(time % 60));
  if(seconds.length == 1) seconds = `0${seconds}`
  return `${minutes}:${seconds}`;
}