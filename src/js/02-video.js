// 1. Ознайомся з документацією бібліотеки Vimeo плеєра.
// 2. Додай бібліотеку як залежність проекту через npm. @
// 3. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player,
// але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const player = new Player('vimeo-player', {
   id: 19231868,
   width: 640,
   loop: true,
});

const PLAYER_CURRENT_TIME = 'videoplayer - current - time';
onPageloading();
player.on('timeupdate', throttle(onSaveTime, 1000));



function onSaveTime({ seconds }) {
  const currentTime = seconds;
  localStorage.setItem(PLAYER_CURRENT_TIME, currentTime);
}

function onPageloading() {
  const saveCurrentTime = localStorage.getItem(PLAYER_CURRENT_TIME);
  if (saveCurrentTime) {
     player.setCurrentTime(saveCurrentTime);
  }
}
