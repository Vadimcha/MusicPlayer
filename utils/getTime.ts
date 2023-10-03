export async function getTime() {
  const curTime = new Date();
  let hour = curTime.getHours().toString(), minute = curTime.getMinutes().toString(), sec = curTime.getSeconds().toString();
  if(hour.length == 1) hour = `0${hour}`
  if(minute.length == 1) minute = `0${minute}`
  if(sec.length == 1) sec = `0${sec}`
  return `${hour}:${minute}:${sec}`
}