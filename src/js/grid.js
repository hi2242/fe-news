import { GRID_CONSTANTS } from '@/constants';

const pickRandomLogo = (cellCount, logoCount) => {
    const newsBrandList = [];

    for (let i = 1; i <= cellCount; i += 1) {
        newsBrandList.push(Math.floor(Math.random() * logoCount));
    }

    return newsBrandList;
}

const createCellHTML = (press) => {
    const path = `images/light_mode_logo/light_brand_logo_${press}.png`
    return `
        <img class="grid-cell" src="${path}">
    `
}

export function renderGrid(target = '#viewArea .center') {

    const pressList = pickRandomLogo(GRID_CONSTANTS.CELL_COUNT, GRID_CONSTANTS.LOGO_COUNT);
    const htmlString = pressList.map(createCellHTML).join('');

    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.innerHTML = htmlString;
    }
}