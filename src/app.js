import '@/assets/css/style.css'
import { getDate } from '@/js/Date.js';
import { addCell } from '@/js/Cell.js';
import { rollingHeadLine } from '@/js/Rolling';
import TitleLogo from '@/assets/images/light_mode_logo/title_logo.png';
import GridView from '@/assets/images/light_mode_logo/grid-view.png';
import ListView from '@/assets/images/light_mode_logo/list-view.png';
import LeftButton from '@/assets/images/light_mode_logo/LeftButton.png';
import RightButton from '@/assets/images/light_mode_logo/RightButton.png';



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
      <li class="left"></li>
      <li class="right"></li>
    </ul>
    <div id="gridView">
      <div id="tabAndViewer">
        <div id="tabButton">
          <div id="allPress">전체 언론사</div>
          <div class="subscribedPress">
            <div class="title">내가 구독한 언론사</div>
            <div class="badge">8</div>
          </div>
        </div>
        <div id="viewButton">
          <img class="listViewIcon" src="${ListView}">
          <img class="gridViewIcon" src="${GridView}">
        </div>
      </div>
      <div id="viewArea">
        <img class="left" src="${LeftButton}">
        <div class="center"></div>
        <img class="right" src="${RightButton}">
      </div>
    </div>
  </div>

`

addCell();
rollingHeadLine();