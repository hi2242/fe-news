import '@/assets/css/style.css'
import { getDate } from '@/js/Date.js';
import TitleLogo from '@/assets/images/light_mode_logo/title_logo.png';

document.querySelector('#app').innerHTML = `
  <div class="upperTab">
    <div class="title">
    <img src="${TitleLogo}" class="newspaperIcon">
    <div class="displayText">뉴스스탠드</div>
    </div>
    <div class="todaysDate">
      ${getDate()}
    </div>
  </div>

`