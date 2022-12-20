import Player from '@vimeo/player';

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoCurrentTime = {
  'videoplayer-current-time': {},
};

player.on('timeupdate', onPlay);

function onPlay(currentTime) {
  console.log(currentTime);
  videoCurrentTime['videoplayer-current-time'] = currentTime;
  console.log(videoCurrentTime['videoplayer-current-time'].seconds);
}

player
  .setCurrentTime(videoCurrentTime['videoplayer-current-time'].seconds)
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
