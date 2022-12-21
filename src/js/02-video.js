import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENTTIME_LOCAL = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
  localStorage.setItem(CURRENTTIME_LOCAL, JSON.stringify(currentTime));
}

const currentTime = JSON.parse(localStorage.getItem(CURRENTTIME_LOCAL));
const { seconds } = currentTime;

player.setCurrentTime(seconds);
