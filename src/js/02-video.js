import throttle from 'lodash.throttle';
import vimeoPlayer from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');
console.log(iframeRef);
const player = new vimeoPlayer(iframeRef);

const onPlay = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
const savedTime = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', onPlay);
player.setCurrentTime(savedTime);
