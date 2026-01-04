import data from '@/assets/data/pressData.json' assert{ type: 'json' };

function sleepCurrentTime(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {

    }
}

function setHeadLine(element, press, title, wrapper) {
    element.innerHTML = `${press[wrapper.value]}${title[wrapper.value]}`;
    wrapper.value += 1;
}

function repeatRolling(element, press, title, index) {
    setHeadLine(element, press, title, index)
    setTimeout(repeatRolling, 5000, element, press, title, index);
}

export function rollingHeadLine() {
    const leftTargetElement = document.querySelector('#autoRollingNewsBar .left');
    const rightTargetElement = document.querySelector('#autoRollingNewsBar .right');
    const pressHtmlString = data.map(each => `<div class="press">${each.press}</div>`);
    const titleHtmlString = data.map(each => `<div class="newsTitle">${each.mainTitle}</div>`);
    let indexWrapper = {
        value: 1
    };

    repeatRolling(leftTargetElement, pressHtmlString, titleHtmlString, indexWrapper);
    sleepCurrentTime(1000);
    repeatRolling(rightTargetElement, pressHtmlString, titleHtmlString, indexWrapper);
}