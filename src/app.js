import '@/assets/css/style.css'
import { getDate } from '@/js/Date.js';
import { reload } from '@/js/Reload.js';
import TitleLogo from '@/assets/images/light_mode_logo/title_logo.png';

document.querySelector('#app').innerHTML = `
  <div id="view">
    <div class="upperTab">
      <button id="title" type="button">
        <img src="${TitleLogo}" class="newspaperIcon">
        <div class="displayText">뉴스스탠드</div>
      </button>
      <div class="todaysDate">
        ${getDate()}
      </div>
    </div>
    <ul id="autoRollingNewsBar">
      <li class="left">
        <div class="press">연합뉴스</div>
        <div class="newsTitle">[속보] 도심 공원 '조용한 독서존' 시범 운영... 시민 호응 이어져</div>
      </li>
      <li class="right">
        <div class="press">서울경제</div>
        <div class="newsTitle">착한 소비 캠페인, 지역 상권 회복에 긍정적 영향</div>
      </li>
    </ul>
    </div>
  </div>
`

reload(document.querySelector('#title'));