import Player from '@vimeo/player';

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay(currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}

const stringifyCurrentTime = localStorage.getItem('videoplayer-current-time');
const currentTime = JSON.parse(stringifyCurrentTime);
console.log(currentTime.seconds);

player
  .setCurrentTime(currentTime.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
