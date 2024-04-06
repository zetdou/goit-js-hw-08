import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {
    player.setCurrentTime(Number.parseFloat(currentTime));
};

player.on("timeupdate", (data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
});
