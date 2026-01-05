import data from '@/assets/data/pressData.json' assert{ type: 'json' };

function setHeadLine(element, press, title, wrapper) {
    if (wrapper.value === press.length) {
        wrapper.value = 0;
    }
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

    initHeadLine();
    setTimeout(() => {
        repeatRolling(leftTargetElement, pressHtmlString, titleHtmlString, indexWrapper, hoverState, rightTimer);
    }, 5000);

    setTimeout(() => {
        repeatRolling(rightTargetElement, pressHtmlString, titleHtmlString, indexWrapper, hoverState, rightTimer);
    }, 6000);
}