import throttle from 'lodash.throttle';
import vimeoPlayer from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');
console.log(iframeRef);
const player = new vimeoPlayer(iframeRef);

const onPlay = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', onPlay);

function currentTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
  player.setCurrentTime(savedTime);
}
}
currentTime();


